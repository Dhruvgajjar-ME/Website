// Service Worker for Portfolio Website
const CACHE_NAME = 'portfolio-v1.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlescholar.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
  'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 