module.exports = {
  "globDirectory": "dist/https/",
  "globPatterns": [
    "common/images/icons/icon-*.png",
    "common/js/common.js",
    "common/js/jquery-3.4.1.min.js"
  ],
  "swDest": "dist/https/sw.js",
  runtimeCaching: [{
    urlPattern: "/index.html",
    handler: 'CacheFirst',
    options: {
      cacheName: 'site-top',
      expiration: {
        maxAgeSeconds: 60,
      },
    },
  }],
};