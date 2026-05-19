const CACHE_NAME = 'maratona-porto-v6';
const ASSETS = [
  './',
  './index.html',
  './forca.html',
  './ativacao.html',
  './suplementos.html',
  './version.js',
  './firebase.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  // Don't cache Firebase/Google auth requests
  const url = event.request.url;
  if (url.includes('firebasedatabase.app') || 
      url.includes('googleapis.com') || 
      url.includes('gstatic.com/firebasejs')) {
    return;
  }

  // Always fetch from network first, fallback to cache for offline
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Update cache with fresh response
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
