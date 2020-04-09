workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https:.*.(jpg|png)'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  'https://mobileapi.wp.pl/v1/graphql',
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&display=swap',
  workbox.strategies.staleWhileRevalidate()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
