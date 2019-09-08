/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

var cacheName = 'pwa-demo';
var cacheFiles = [
  '/',
  'manifest.json',
  './jquery-3.2.1.min.js',
  './mbc-2.1.3.min.js',
  './server-worker.js',
  // './css/FilePage.css',
  // './css/Layout.css',
  // './css/SettingPage.css',
  './img/faviconJs.ico',
  './img/logo-dynamsoft-blackBg-190x47.png',
  './index.html',

]

self.addEventListener('install', function (e){
  console.log('[Service Worker  ]： Install');
  var cacheOpenPromise = caches.open(cacheName).then(function (cache) {
    return cache.addAll(cacheFiles);
  });
  e.waitUntil(cacheOpenPromise);
})

self.addEventListener('activate', function (e) {
  console.log('[Service Worker ]：Activate');
  var cachePromise = caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
          if (key !== cacheName) {
              return caches.delete(key);
          }
      }));
  })
  e.waitUntil(cachePromise);
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // console.log("fetch…… ",e);
  var unNeedCacheRequestUrls = [
    '/sockjs-node'
  ]

  var needCache = unNeedCacheRequestUrls.some(url=>{
    return e.request.url.indexOf(url)===-1;
  });

  if(needCache){
    e.respondWith(
      caches.match(e.request).then(function(r) {
        console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone()).catch(e=>console.log(e));
            return response;
          },e=>{console.log(e)});
        },e=>{console.log(e)});
      },e=>{console.log(e)})
    );    
  }

  
},e=>{console.log(e)});
