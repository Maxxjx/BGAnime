const CACHE_NAME = 'bganime-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/aboutus.html',
  '/404.html',
  '/styles/styles.css',
  '/styles/abouts.css',
  '/styles/404.css',
  '/manifest.json',
  '/Asset/logo/mLogo.svg',
  '/Asset/image/hero3.jpg'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch from cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});