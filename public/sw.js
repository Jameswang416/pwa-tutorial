importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  console.log(workbox);
 
 /*  import {
    pageCache,
    imageCache,
    staticResourceCache,
    googleFontsCache,
    offlineFallback,
  } from 'workbox.recipes; */
  
  workbox.recipes.pageCache();
  workbox.recipes.googleFontsCache();
  
  workbox.recipes.staticResourceCache();
  
  workbox.recipes.imageCache();
  
 workbox.recipes.offlineFallback(); 
 // This can be any strategy, CacheFirst used as an example.
const strategy = new workbox.strategies.CacheFirst();
const urls = ['/offline.html'];

workbox.recipes.warmStrategyCache({urls, strategy});
 
/* const strategy = new workbox.strategies.CacheFirst();
const urls = ['/offline.html'];

self.addEventListener('install', event => {
  // handleAll returns two promises, the second resolves after all items have been added to cache.
  const done = urls.map(
    path =>
      strategy.handleAll({
        event,
        request: new Request(path),
      })[1]
  );

  event.waitUntil(Promise.all(done));
});
 */
 /* workbox.registerRoute(
    // Check to see if the request's destination is style for an image
    ({ request }) => request.destination === 'image',
    // Use a Cache First caching strategy
    new CacheFirst({
      // Put all cached files in a cache named 'images'
      cacheName: 'images1',
      plugins: [
        // Ensure that only requests that result in a 200 status are cached
        new CacheableResponsePlugin({
          statuses: [200],
        }),
        // Don't cache more than 50 items, and expire them after 30 days
        new ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 , // 30 Days
        }),
      ],
    }),
  ); */
 // Cache images with a Cache First strategy
