self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // If a cache is hit, return the cloned response.
        if (cachedResponse) {
          return cachedResponse.clone();
        }

        // If not, fetch the request from the network.
        return fetch(event.request);
      })
  );
});
