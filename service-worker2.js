self.addEventListener("install", function(evt) {
  evt.waitUntil(
    caches.open("v1").then(function(cache) {
      return cache.addAll(["./public", "./*"]);
    })
  );
});

self.addEventListener("fetch", function(evt) {
  evt.respondWith(
    caches.match(evt.request).then(function(response) {
      if (response !== undefined) {
        return response;
      } else {
        return fetch(evt.request)
          .then(function(response) {
            let responseClone = response.clone();

            caches.open("v1").then(function(cache) {
              cache.put(evt.request, responseClone);
            });
            return response;
          })
          .catch(function() {
            console.log("Hello");
          });
      }
    })
  );
});
