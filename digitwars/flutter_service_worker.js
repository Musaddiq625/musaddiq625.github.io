'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d5692a874e1e2129dd58ffd3f5b9c6f8",
"version.json": "6da34b7541acd7b4045d36be6190cc8b",
"index.html": "dd3696fd2261fd80f106dc4fd6c4a77f",
"/": "dd3696fd2261fd80f106dc4fd6c4a77f",
"main.dart.js": "b10f6424738ca4d6b20855103cd3760b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af25ca20af9d0f55ff7c278c29f712df",
"musaddiq625.github.io/.git/config": "0bb7711a245b999d924ff7fe75a86eb0",
"musaddiq625.github.io/.git/objects/68/96368f565ad25da8bbcfc24cb8025d1f1f0860": "b27d89f675c7539d80816d854537bafb",
"musaddiq625.github.io/.git/objects/0e/6d366515d4798abc9db58e05dd9dc0fa049959": "324573a2f8e6b35155c58a7203b0bbd4",
"musaddiq625.github.io/.git/objects/34/f20368304bba55824d29fe275307312f36e38b": "56e35fb36bcae285414d239d6d23326e",
"musaddiq625.github.io/.git/objects/d9/d92336b0c8e64f40d6c0833f2c0dcb483e1d44": "eda00242d3ea153fa1d8872567d433f2",
"musaddiq625.github.io/.git/objects/ae/75e1b998b8fd6790ec59dc5d508b5b15b60d05": "ed84d82d231bf1952d3df42707add730",
"musaddiq625.github.io/.git/objects/c9/312a35d94030cdaf68486cb8220e24449944b7": "4504e5cee5bdcad8ec5536f7ef6d5482",
"musaddiq625.github.io/.git/objects/4b/914f3702ceb76d0df67fbc603b4df6ed45b7fb": "07c02190b42f490cbcf28cb615d8010e",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.rev": "d3971fe5f19d7cf6a7d157d55c80309b",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.idx": "86269a2c99dcaa331d01e3dc83c97b1f",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.pack": "75224f44c695534907c0a26316bb8c02",
"musaddiq625.github.io/.git/objects/80/ea33159495d15bf293eb1c0217cecb27c53e87": "e4202a82af45e6151e55efa0312192db",
"musaddiq625.github.io/.git/objects/19/fb385c93230b109150cb07b7d4e060ede064f9": "e216cef63e8530dec934d407a9de9d44",
"musaddiq625.github.io/.git/objects/ff/3341646798e31c6721d075428c5f123cfa43b0": "aca114c66412dc89a66d2f21a90e00bd",
"musaddiq625.github.io/.git/objects/c5/52058bb3cce53d8df9c030253224890a30cc8b": "7c27a0d954f0d9e4dcf68c46bf8c7676",
"musaddiq625.github.io/.git/objects/77/01236f494f9e850ce356a7b6e625bd03c4cea3": "26cda1d3122ee763ccd9417f5acb938e",
"musaddiq625.github.io/.git/objects/8c/d0ab23fca79177b4b7490ec1627692b149ba8a": "b2ddec75dcf5bfcf61abe4d6fa50b88e",
"musaddiq625.github.io/.git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
"musaddiq625.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"musaddiq625.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"musaddiq625.github.io/.git/logs/HEAD": "cb2023074f08b624bbb6bc79d74cfe71",
"musaddiq625.github.io/.git/logs/refs/heads/main": "cb2023074f08b624bbb6bc79d74cfe71",
"musaddiq625.github.io/.git/logs/refs/remotes/origin/HEAD": "813182c69093fca28e444bb4658cf991",
"musaddiq625.github.io/.git/logs/refs/remotes/origin/main": "dbf8ee31e6f6ba80e224ed4eca8a02a4",
"musaddiq625.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"musaddiq625.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"musaddiq625.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"musaddiq625.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"musaddiq625.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"musaddiq625.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"musaddiq625.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"musaddiq625.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"musaddiq625.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"musaddiq625.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"musaddiq625.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"musaddiq625.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"musaddiq625.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"musaddiq625.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"musaddiq625.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"musaddiq625.github.io/.git/refs/heads/main": "672d975d883df6c46c28866c43aae799",
"musaddiq625.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"musaddiq625.github.io/.git/refs/remotes/origin/main": "875226aa79e4be2f390b6b6cb9404785",
"musaddiq625.github.io/.git/index": "97522cc3b511167078124d6d429b45d1",
"musaddiq625.github.io/.git/packed-refs": "313ce1c62c58554611dcecd084a90b86",
"musaddiq625.github.io/.git/COMMIT_EDITMSG": "22fbf4be4d54407af67bf408f1c40efa",
"musaddiq625.github.io/.git/FETCH_HEAD": "1d25212b644248a84727d748cc67ae9e",
"musaddiq625.github.io/digitwars/flutter_bootstrap.js": "64fd8965c66299cdceb2c6577422d1b7",
"musaddiq625.github.io/digitwars/version.json": "6da34b7541acd7b4045d36be6190cc8b",
"musaddiq625.github.io/digitwars/index.html": "dd3696fd2261fd80f106dc4fd6c4a77f",
"musaddiq625.github.io/digitwars/main.dart.js": "b10f6424738ca4d6b20855103cd3760b",
"musaddiq625.github.io/digitwars/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"musaddiq625.github.io/digitwars/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"musaddiq625.github.io/digitwars/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"musaddiq625.github.io/digitwars/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"musaddiq625.github.io/digitwars/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"musaddiq625.github.io/digitwars/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"musaddiq625.github.io/digitwars/manifest.json": "af25ca20af9d0f55ff7c278c29f712df",
"musaddiq625.github.io/digitwars/assets/AssetManifest.json": "4f834ef67d320ff1674bbb1e79295ffb",
"musaddiq625.github.io/digitwars/assets/NOTICES": "541da44f9c26dd01506a1fdceb2826f7",
"musaddiq625.github.io/digitwars/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"musaddiq625.github.io/digitwars/assets/AssetManifest.bin.json": "aaeb5993c2fd8cc6c18566444a5784e6",
"musaddiq625.github.io/digitwars/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"musaddiq625.github.io/digitwars/assets/shaders/cloudy.frag": "38190fc13c720dffa0da58f60eb61ab9",
"musaddiq625.github.io/digitwars/assets/AssetManifest.bin": "efd66630701ea44f127b6054936d373b",
"musaddiq625.github.io/digitwars/assets/fonts/MaterialIcons-Regular.otf": "9245d95c87bcc5f84ba142064de4399d",
"musaddiq625.github.io/digitwars/assets/loading-text.gif": "393bcdb21e28679f89d9fd9cfaecdced",
"musaddiq625.github.io/digitwars/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"musaddiq625.github.io/digitwars/canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"musaddiq625.github.io/digitwars/canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"musaddiq625.github.io/digitwars/canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"musaddiq625.github.io/digitwars/canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"musaddiq625.github.io/digitwars/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"musaddiq625.github.io/digitwars/canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"musaddiq625.github.io/digitwars/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"musaddiq625.github.io/digitwars/canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"assets/AssetManifest.json": "4f834ef67d320ff1674bbb1e79295ffb",
"assets/NOTICES": "541da44f9c26dd01506a1fdceb2826f7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "aaeb5993c2fd8cc6c18566444a5784e6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/cloudy.frag": "38190fc13c720dffa0da58f60eb61ab9",
"assets/AssetManifest.bin": "efd66630701ea44f127b6054936d373b",
"assets/fonts/MaterialIcons-Regular.otf": "9245d95c87bcc5f84ba142064de4399d",
"assets/loading-text.gif": "393bcdb21e28679f89d9fd9cfaecdced",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
