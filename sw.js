var staticAssets = [
  '/.',
  'css/main.css',
  'js/main.js',
  'manifest.json'
]

self.addEventListener('install', async event => {
  var cache = await caches.open('f6sugestoes-static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  var req = event.request;
  var url = new URL(req.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(req));
  } else {
    event.respondWith(networkFirst(req))
  }

});

async function cacheFirst(req) {
  var cachedResponse = await caches.match(req);
  return cachedResponse || fetch(req);
};

async function networkFirst(req) {
  var cache = await caches.open('f6sugestoes-dynamic');

  try {
    var res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}