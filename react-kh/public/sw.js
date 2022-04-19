// const CACHE_VERSION = 5;
// const STATIC_CACHE_NAME = `static-cache-v${CACHE_VERSION}`;
// const DYNAMIC_CACHE_NAME = `dynamic-cache-v${CACHE_VERSION}`;
//
// const STATIC_ASSETS = [
//   'index.html',
//   'programmer.png',
//   '/js/pwa_app.js',
//   'favicon.ico',
//   'programmer_bw.png',
//   'logo192.png',
//   'logo512.png',
//   '/css/*',
//   '/js/*',
//   '/media/*'
// ];
//
// // const STATIC_ASSETS = [
// //   './',
// //   './index.html',
// //   './programmer.png',
// //   './js/pwa_app.js',
// //   './favicon.ico',
// //   './programmer_bw.png',
// //   './logo192.png',
// //   './logo512.png',
// //   './css/*',
// //   './js/*',
// //   './media/*'
// // ];
//
// self.addEventListener('install', async () => {
//   const CACHE = await caches.open(STATIC_CACHE_NAME);
//   await CACHE.addAll(STATIC_ASSETS);
// });
//
// self.addEventListener('activate', async () => {
//   const CACHE_NAMES = await caches.keys();
//   await Promise.all(
//     CACHE_NAMES
//       .filter((name) => name !== STATIC_CACHE_NAME)
//       .filter((name) => name !== DYNAMIC_CACHE_NAME)
//       .map((name) => caches.delete(name))
//   );
// });
//
// self.addEventListener('fetch', evt => {
//   const {request} = evt;
//   const url = new URL(request.url);
//   if (url.origin === location.origin) {
//     evt.respondWith(cacheFirst(request));
//   } else {
//     evt.respondWith(networkFirst(request));
//   }
// })
//
// async function cacheFirst(request) {
//   const CACHED = await caches.match(request);
//   return CACHED ?? await fetch(request);
// }
//
// async function networkFirst(request) {
//   const CACHE = await caches.open(DYNAMIC_CACHE_NAME);
//   try {
//     const RESPONSE = await fetch(request);
//     await CACHE.put(request, RESPONSE.clone());
//     return RESPONSE;
//   } catch (e) {
//     const CACHED = await CACHE.match(request);
//     return CACHED ?? await caches.match('/offline.html');
//   }
// }