module.exports = {
  "globDirectory": "dist/https/",
  "globPatterns": [
    "common/images/icons/icon-*.png",
  ],
  "swDest": "dist/https/sw.js",
  runtimeCaching: [{
    urlPattern: "/",
    handler: 'NetworkFirst',
    options: {
      cacheName: 'site-top',
      expiration: {
        maxAgeSeconds: 60 * 60 * 24,
      },
    },
  }],
};