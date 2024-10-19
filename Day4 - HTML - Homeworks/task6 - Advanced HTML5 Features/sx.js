// sw.js
console.log("Service Worker loading...");

self.addEventListener('install', function(event) {
    console.log("Service Worker installed");
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            console.log('Caching files');
            return cache.addAll(['/']);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activated');
});
