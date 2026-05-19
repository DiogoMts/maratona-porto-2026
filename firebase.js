// Firebase - simple sync (no real-time listener)
const firebaseConfig = {
  apiKey: "AIzaSyAZD7vtdk3oPLi0ykzmrUzTrCWCbgz4wLk",
  authDomain: "maratona-porto-2026.firebaseapp.com",
  databaseURL: "https://maratona-porto-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maratona-porto-2026",
  storageBucket: "maratona-porto-2026.firebasestorage.app",
  messagingSenderId: "805944057637",
  appId: "1:805944057637:web:1bc59acf3d301ec44084cc"
};

let firebaseAuth, firebaseDb, currentUser = null;

function loadFirebase() {
  return new Promise((resolve) => {
    if (window.firebase) { resolve(); return; }
    const s1 = document.createElement('script');
    s1.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js';
    s1.onload = () => {
      const s2 = document.createElement('script');
      s2.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js';
      s2.onload = () => {
        const s3 = document.createElement('script');
        s3.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js';
        s3.onload = resolve;
        document.head.appendChild(s3);
      };
      document.head.appendChild(s2);
    };
    document.head.appendChild(s1);
  });
}

async function initFirebase() {
  await loadFirebase();
  firebase.initializeApp(firebaseConfig);
  firebaseAuth = firebase.auth();
  firebaseDb = firebase.database();
  await firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  firebaseAuth.onAuthStateChanged((user) => {
    currentUser = user;
    updateSyncUI();
    if (user) pullFromCloud();
  });
}

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebaseAuth.signInWithPopup(provider).catch(() => {
    firebaseAuth.signInWithRedirect(provider);
  });
}

function signOut() {
  firebaseAuth.signOut();
  currentUser = null;
  updateSyncUI();
}

// Push local data to cloud
function pushToCloud() {
  if (!currentUser) return;
  const data = {
    completed: localStorage.getItem('maratona_completed') || '{}',
    exercises: localStorage.getItem('maratona_exercises') || '{}',
    notes: localStorage.getItem('maratona_notes') || '{}',
    supps: localStorage.getItem('maratona_supps') || '{}',
    lastSync: new Date().toISOString()
  };
  // Only push if there's real data
  if (data.completed === '{}' && data.exercises === '{}' && data.notes === '{}' && data.supps === '{}') return;
  firebaseDb.ref('users/' + currentUser.uid).set(data);
}

// Pull cloud data to local
function pullFromCloud() {
  if (!currentUser) return;
  firebaseDb.ref('users/' + currentUser.uid).once('value').then((snapshot) => {
    const data = snapshot.val();
    if (!data) return;
    // Merge: local + cloud, cloud wins on conflicts
    ['completed', 'exercises', 'notes', 'supps'].forEach(key => {
      const local = JSON.parse(localStorage.getItem('maratona_' + key) || '{}');
      const cloud = JSON.parse(data[key] || '{}');
      if (Object.keys(cloud).length > 0) {
        const merged = {...local, ...cloud};
        localStorage.setItem('maratona_' + key, JSON.stringify(merged));
      }
    });
    // Refresh UI
    if (typeof completed !== 'undefined') completed = JSON.parse(localStorage.getItem('maratona_completed') || '{}');
    if (typeof renderWeek === 'function') renderWeek();
    if (typeof renderDay === 'function') renderDay();
  });
}

// Auto-push after any localStorage change (immediate, no debounce)
const originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
  originalSetItem(key, value);
  if (currentUser && key.startsWith('maratona_')) {
    pushToCloud();
  }
};

// UI
function updateSyncUI() {
  const el = document.getElementById('syncStatus');
  const btn = document.getElementById('syncBtn');
  const userEl = document.getElementById('userDisplay');
  if (!el) return;
  if (currentUser) {
    el.innerHTML = `<span style="color:#4ecca3;">☁️ ${currentUser.displayName || 'Online'}</span>`;
    if (btn) btn.textContent = 'Logout';
    if (userEl) userEl.textContent = currentUser.displayName || currentUser.email || '';
  } else {
    el.innerHTML = `<span style="opacity:0.5;">☁️ Offline (só leitura)</span>`;
    if (btn) btn.textContent = 'Login Google';
    if (userEl) userEl.textContent = '';
  }
}

function getSyncMenuHTML() {
  return `
    <div class="sidenav-section">
      <div class="sidenav-section-title">Sincronização</div>
      <div id="syncStatus" class="sidenav-item" style="cursor:default;"><span style="opacity:0.5;">☁️ A carregar...</span></div>
      <div class="sidenav-item" onclick="currentUser ? signOut() : signIn()"><span class="nav-icon">🔑</span> <span id="syncBtn">Login Google</span></div>
    </div>
  `;
}

// Check if user can edit (must be logged in)
function canEdit() {
  return !!currentUser;
}

initFirebase();
