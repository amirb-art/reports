// Spotify All-Time 2500 Companion - Service Worker
const CACHE_NAME = 'top2500-companion-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let network requests pass through with standard cache fallback
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
