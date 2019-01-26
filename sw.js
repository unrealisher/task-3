const cacheName = "v1";

const cacheAssets = ["/**/*.*"];

self.addEventListener("install", evt => {
  console.log("Service Worker: Installed");
  evt.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", evt => {
  console.log("Service Worker: Activated");
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", evt => {
  console.log("Service Worker: Fetching");
  evt.respondWith(fetch(evt.request)).catch(() => caches.match(evt.request));
});
