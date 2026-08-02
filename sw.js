const CACHE_NAME = 'clockit-cache-v3'; // Increment version number (v2, v3, etc.) on new updates
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Install Event
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force waiting service worker to become active immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate Event (Deletes old caches automatically)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Delete old cached versions like v1
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all open app tabs immediately
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
