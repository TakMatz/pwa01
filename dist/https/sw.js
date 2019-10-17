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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "common/images/icons/icon-192x192.png",
    "revision": "9d0cceac9f5ae597915fadcb551c42ae"
  },
  {
    "url": "common/images/icons/icon-512x512.png",
    "revision": "144ee39846a274c100a63a9d523ef96b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("index.html", new workbox.strategies.NetworkFirst({ "cacheName":"site-top", plugins: [new workbox.expiration.Plugin({ maxAgeSeconds: 86400, purgeOnQuotaError: false })] }), 'GET');
