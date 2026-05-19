// Firebase configuration and sync
const firebaseConfig = {
  apiKey: "AIzaSyAZD7vtdk3oPLi0ykzmrUzTrCWCbgz4wLk",
  authDomain: "maratona-porto-2026.firebaseapp.com",
  databaseURL: "https://maratona-porto-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maratona-porto-2026",
  storageBucket: "maratona-porto-2026.firebasestorage.app",
  messagingSenderId: "805944057637",
  appId: "1:805944057637:web:1bc59acf3d301ec44084cc"
};

let firebaseApp, firebaseAuth, firebaseDb, currentUser = null;
let syncEnabled = false;

// Load Firebase SDK dynamically
function loadFirebase() {
  return new Promise((resolve) => {
    if (window.firebase) { resolve(); return; }
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js';
    script.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js';
      script2.onload = () => {
        const script3 = document.createElement('script');
        script3.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js';
        script3.onload = () => resolve();
        document.head.appendChild(script3);
      };
      document.head.appendChild(script2);
    };
    document.head.appendChild(script);
  });
}

async function initFirebase() {
  await loadFirebase();
  firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firebaseDb = firebase.database();
  
  // Set persistence to LOCAL (survives page reload)
  await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
  // Handle redirect result (mobile sign-in)
  try {
    const result = await firebaseAuth.getRedirectResult();
    if (result && result.user) {
      currentUser = result.user;
      syncEnabled = true;
      updateSyncUI();
      pushToCloud();
      pullFromCloud();
      listenForChanges();
    }
  } catch(err) {
    if (err.code !== 'auth/no-auth-event') {
      alert('Erro login: ' + err.code + '\n' + err.message);
    }
  }
  
  // Listen for auth state changes
  firebaseAuth.onAuthStateChanged((user) => {
    currentUser = user;
    syncEnabled = !!user;
    updateSyncUI();
    if (user) {
      pushToCloud();
      pullFromCloud();
      listenForChanges();
    }
  });
}

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider).then((result) => {
    if (result && result.user) {
      alert('Login OK: ' + result.user.displayName);
    }
  }).catch(err => {
    // If popup blocked, try redirect
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-closed-by-user') {
      firebaseAuth.signInWithRedirect(provider);
    } else {
      alert('Erro: ' + err.code + '\n' + err.message);
    }
  });
}

function signOut() {
  firebaseAuth.signOut();
  syncEnabled = false;
  updateSyncUI();
}

// Sync data to cloud
function pushToCloud() {
  if (!syncEnabled || !currentUser) return;
  const data = {
    completed: localStorage.getItem('maratona_completed') || '{}',
    exercises: localStorage.getItem('maratona_exercises') || '{}',
    notes: localStorage.getItem('maratona_notes') || '{}',
    supps: localStorage.getItem('maratona_supps') || '{}',
    lastSync: new Date().toISOString()
  };
  firebaseDb.ref('users/' + currentUser.uid).set(data);
}

// Pull data from cloud
function pullFromCloud() {
  if (!syncEnabled || !currentUser) return;
  firebaseDb.ref('users/' + currentUser.uid).once('value').then((snapshot) => {
    const data = snapshot.val();
    if (!data) { 
      // First time: push local data to cloud
      pushToCloud();
      return; 
    }
    // Merge: for each key, use whichever has more entries (more data = more recent usage)
    const keys = ['completed', 'exercises', 'notes', 'supps'];
    keys.forEach(key => {
      const localData = JSON.parse(localStorage.getItem('maratona_' + key) || '{}');
      const cloudData = JSON.parse(data[key] || '{}');
      // Merge: combine both, cloud wins on conflicts
      const merged = {...localData, ...cloudData};
      localStorage.setItem('maratona_' + key, JSON.stringify(merged));
    });
    // Push merged data back to cloud
    pushToCloud();
    // Reload page state
    if (typeof completed !== 'undefined') {
      completed = JSON.parse(localStorage.getItem('maratona_completed') || '{}');
    }
    if (typeof renderWeek === 'function') renderWeek();
    if (typeof renderDay === 'function') renderDay();
  });
}

// Listen for real-time changes from other devices
function listenForChanges() {
  if (!syncEnabled || !currentUser) return;
  firebaseDb.ref('users/' + currentUser.uid).on('value', (snapshot) => {
    const data = snapshot.val();
    if (!data) return;
    if (data.completed) localStorage.setItem('maratona_completed', data.completed);
    if (data.exercises) localStorage.setItem('maratona_exercises', data.exercises);
    if (data.notes) localStorage.setItem('maratona_notes', data.notes);
    if (data.supps) localStorage.setItem('maratona_supps', data.supps);
    if (typeof completed !== 'undefined') {
      completed = JSON.parse(localStorage.getItem('maratona_completed') || '{}');
    }
    if (typeof renderWeek === 'function') renderWeek();
    if (typeof renderDay === 'function') renderDay();
  });
}

// Override localStorage setItem to auto-sync
const originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
  originalSetItem(key, value);
  if (syncEnabled && key.startsWith('maratona_')) {
    pushToCloud();
  }
};

// UI helpers
function updateSyncUI() {
  const el = document.getElementById('syncStatus');
  const btn = document.getElementById('syncBtn');
  if (!el) return;
  if (syncEnabled && currentUser) {
    el.innerHTML = `<span style="color:#4ecca3;">☁️ ${currentUser.displayName || currentUser.email}</span>`;
    if (btn) btn.textContent = 'Logout';
  } else {
    el.innerHTML = `<span style="opacity:0.5;">☁️ Offline</span>`;
    if (btn) btn.textContent = 'Login Google';
  }
}

function getSyncMenuHTML() {
  return `
    <div class="sidenav-section">
      <div class="sidenav-section-title">Sincronização</div>
      <div id="syncStatus" class="sidenav-item" style="cursor:default;"><span style="opacity:0.5;">☁️ A carregar...</span></div>
      <div class="sidenav-item" id="syncAction" onclick="syncEnabled ? signOut() : signIn()"><span class="nav-icon">🔑</span> <span id="syncBtn">Login Google</span></div>
    </div>
  `;
}

// Init on page load
initFirebase().then(() => {
  updateSyncUI();
  if (currentUser) listenForChanges();
});
