const CACHE_NAME = 'agdal-school-v3';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/main.css?v=3',
    './css/animations.css?v=3',
    './css/games.css?v=3',
    './css/library.css?v=3',
    './js/app.js?v=3',
    './js/data.js?v=3',
    './js/games.js?v=3',
    './js/library.js?v=3',
    './js/animations.js?v=3',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap'
];

// Install Event: Cache critical assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch Event: Stale-While-Revalidate Strategy
// 1. Try to serve from cache
// 2. Regardless of cache hit, fetch from network to update cache (for next time)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response if found
                const fetchPromise = fetch(event.request).then(
                    (networkResponse) => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clone the response
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                );

                // Return result from cache, or fall back to fetch
                return cachedResponse || fetchPromise;
            })
    );
});
