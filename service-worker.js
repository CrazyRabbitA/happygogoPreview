importScripts('static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author zxy(401694714@qq.com)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "index.html",
    "revision": "b2ba2873bc74deb18d0eccf3cdba1d05"
  },
  {
    "url": "static/api/gc_api.js",
    "revision": "5067353ca940bc830dab35e3cfc44863"
  },
  {
    "url": "static/api/mgc_api.js",
    "revision": "dc716d121d185e8f7605a8884740afc4"
  },
  {
    "url": "static/api/zxy_api.js",
    "revision": "fe2c8f3ba0268bcc2d11bc938aca87ab"
  },
  {
    "url": "static/css/index.135112b2.css"
  },
  {
    "url": "static/fonts/MaterialIcons-Regular.012cf6a1.woff"
  },
  {
    "url": "static/fonts/MaterialIcons-Regular.a37b0c01.ttf"
  },
  {
    "url": "static/img/sprites/sprite.css",
    "revision": "499fdd0d5bfe35ec78bfa7027565744a"
  },
  {
    "url": "static/js/index.a64e1d1d.js"
  },
  {
    "url": "static/js/manifest.be8f7170.js"
  },
  {
    "url": "static/js/vendor.617f9026.js"
  },
  {
    "url": "static/js/vue.1193b9cb.js"
  },
  {
    "url": "static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "static/translateCommon/elemmTrans.js",
    "revision": "daf0b671c1aafd76d0338e4f34c74c5b"
  },
  {
    "url": "static/translateCommon/en.js",
    "revision": "dc8ed35a5192fc0aa6243148e455fcb1"
  },
  {
    "url": "static/translateCommon/mm.js",
    "revision": "29a25787d987d24126d51d4459cd26d0"
  },
  {
    "url": "static/zawzyifont/font.css",
    "revision": "38462dc3bcdf6ae984097e1b35381a9a"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.eot",
    "revision": "3a58dee80372ea71037802a184387bcf"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.ttf",
    "revision": "d03258627a63a5a697fc5cd4b68eface"
  },
  {
    "url": "static/zawzyifont/ZAWGYIONE.woff",
    "revision": "b9b5c37b86f89a5e0e44f6ba314d505c"
  }
]);
workboxSW.router.registerNavigationRoute('index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workboxSW.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );
