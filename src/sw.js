importScripts(
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js'
);

importScripts(
  'https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js'
);

const store = new idbKeyval.Store('GraphQL-Cache', 'PostResponses');

workbox.routing.registerRoute(
  new RegExp('/graphql(/)?'),
  async ({ event }) => {
    return staleWhileRevalidate(event);
  },
  'POST'
);

workbox.routing.registerRoute(
  new RegExp('https:.*.(jpg|png)'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600&display=swap',
  workbox.strategies.staleWhileRevalidate()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener('fetch', async (event) => {
  if (event.request.method === 'POST') {
    event.respondWith(staleWhileRevalidate(event));
  }
});

async function staleWhileRevalidate(event) {
  let cachedResponse = await getCache(event.request.clone());
  let fetchPromise = fetch(event.request.clone())
    .then((response) => {
      setCache(event.request.clone(), response.clone());
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
  return cachedResponse ? Promise.resolve(cachedResponse) : fetchPromise;
}

async function serializeResponse(response) {
  let serializedHeaders = {};
  for (let entry of response.headers.entries()) {
    serializedHeaders[entry[0]] = entry[1];
  }
  let serialized = {
    headers: serializedHeaders,
    status: response.status,
    statusText: response.statusText,
  };
  serialized.body = await response.json();
  return serialized;
}

async function setCache(request, response) {
  let body = await request.json();

  let id = CryptoJS.MD5(body.query + JSON.stringify(body.variables)).toString();

  const entry = {
    query: body.query,
    response: await serializeResponse(response),
    timestamp: Date.now(),
  };
  idbKeyval.set(id, entry, store);
}

async function getCache(request) {
  let data;
  try {
    let body = await request.json();
    let id = CryptoJS.MD5(body.query + JSON.stringify(body.variables)).toString();
    data = await idbKeyval.get(id, store);
    if (!data) return null;

    let cacheControl = request.headers.get('Cache-Control');
    let maxAge = cacheControl ? parseInt(cacheControl.split('=')[1]) : 3600;
    if (Date.now() - data.timestamp > maxAge * 1000) {
      return null;
    }

    return new Response(JSON.stringify(data.response.body), data.response);
  } catch (err) {
    return null;
  }
}

