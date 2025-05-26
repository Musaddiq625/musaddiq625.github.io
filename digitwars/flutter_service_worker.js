'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "284dfbba81abba68203677ba3bc7cad5",
"version.json": "6da34b7541acd7b4045d36be6190cc8b",
"index.html": "dd3696fd2261fd80f106dc4fd6c4a77f",
"/": "dd3696fd2261fd80f106dc4fd6c4a77f",
"main.dart.js": "5ddb850fa6b988b763e9aa6b1604c858",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af25ca20af9d0f55ff7c278c29f712df",
"musaddiq625.github.io/.git/ORIG_HEAD": "672d975d883df6c46c28866c43aae799",
"musaddiq625.github.io/.git/config": "0bb7711a245b999d924ff7fe75a86eb0",
"musaddiq625.github.io/.git/objects/95/cfb56904cc5af3b590752ec2b17b23392e32cc": "7a8d106b0368e3cbd183dcde290960e7",
"musaddiq625.github.io/.git/objects/68/96368f565ad25da8bbcfc24cb8025d1f1f0860": "b27d89f675c7539d80816d854537bafb",
"musaddiq625.github.io/.git/objects/57/68e32a6bb557ed55649726da6586fc19fa8351": "c4fabcc78632ff0be8efc513a1f62abe",
"musaddiq625.github.io/.git/objects/9b/c76132a26c8512ed1690a9229d162f7b5f9011": "99b37882e9a6fc6510931332ea82691a",
"musaddiq625.github.io/.git/objects/3c/f7505dd502cfb732887255c58ab3657d588637": "ad1f8094cf884dfba70b7c0d5866ca9b",
"musaddiq625.github.io/.git/objects/0e/6d366515d4798abc9db58e05dd9dc0fa049959": "324573a2f8e6b35155c58a7203b0bbd4",
"musaddiq625.github.io/.git/objects/60/ab700c0cac9c7adc3741bfc3d683f560d008b2": "325250a681cf968568970ad7dd822ed2",
"musaddiq625.github.io/.git/objects/34/20fc1972abb64899ac7ca6de29f0f28bfcc026": "34419b35ad219e522f3ad6d2909a1f88",
"musaddiq625.github.io/.git/objects/34/f20368304bba55824d29fe275307312f36e38b": "56e35fb36bcae285414d239d6d23326e",
"musaddiq625.github.io/.git/objects/02/f3eca9e8522996182f084c54be99a2ceb22524": "1b19db19a837f18dbf59b88085d8de23",
"musaddiq625.github.io/.git/objects/a4/d9821006ad4dde58cde8a076d7bbac78cdb61e": "b743d3f5397ba4cfd0281dab93f3f041",
"musaddiq625.github.io/.git/objects/d9/d92336b0c8e64f40d6c0833f2c0dcb483e1d44": "eda00242d3ea153fa1d8872567d433f2",
"musaddiq625.github.io/.git/objects/ad/24d23176bca692444cd4a83c6356048d888333": "d49cc00ada77924412870e3a0fda9ea1",
"musaddiq625.github.io/.git/objects/bb/d56baae25f33b07907684e11d4853ddebb47db": "0856b2964a09066bcb4059ab59a0c8b2",
"musaddiq625.github.io/.git/objects/a2/b46005865a262883f699b4df19163fbc096687": "285d507cef44d676f77e5a20436ba0fc",
"musaddiq625.github.io/.git/objects/ae/75e1b998b8fd6790ec59dc5d508b5b15b60d05": "ed84d82d231bf1952d3df42707add730",
"musaddiq625.github.io/.git/objects/d8/153826c349d7042d2b1bbebc0edcca6888b705": "61fa682b7ac6b4efe894af5954f46a2f",
"musaddiq625.github.io/.git/objects/f3/420ce22f5b917f54def5b30938f42908706af2": "a354084bc0330ac52824b732eecb9088",
"musaddiq625.github.io/.git/objects/c9/312a35d94030cdaf68486cb8220e24449944b7": "4504e5cee5bdcad8ec5536f7ef6d5482",
"musaddiq625.github.io/.git/objects/e4/236652d021ead26ffa44bb8ae751e072471667": "2224f2af0f7d2fe86da5989f308ee258",
"musaddiq625.github.io/.git/objects/fe/a544c6a3fed2eda42fe4a2cf906a8ed9ca50b6": "e05bed1cd7ba47c6ed9632dbc0976d32",
"musaddiq625.github.io/.git/objects/c8/a4de7f5bfabf606f35e11bea527c6e6e27a634": "e80702d5c77f6cafc0c5cab3fbbd5a09",
"musaddiq625.github.io/.git/objects/ec/b5ed8d55d2e395b25b8b672083852455528539": "5e115abd163a09f5a9a06694c583ce54",
"musaddiq625.github.io/.git/objects/4b/914f3702ceb76d0df67fbc603b4df6ed45b7fb": "07c02190b42f490cbcf28cb615d8010e",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.rev": "d3971fe5f19d7cf6a7d157d55c80309b",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.idx": "86269a2c99dcaa331d01e3dc83c97b1f",
"musaddiq625.github.io/.git/objects/pack/pack-5305e3cb48de7786437ed85e9f3e1906d202a069.pack": "75224f44c695534907c0a26316bb8c02",
"musaddiq625.github.io/.git/objects/29/e6c0e7ebfcc09116db759c86eef05a3f722a1d": "9b5c6cd792ec58bb003d6a220e56f147",
"musaddiq625.github.io/.git/objects/1f/0b28c77a71bbef1f2b3f733134e72c67b4379e": "5db7caae1fe53f4f79d13a14cf7eedab",
"musaddiq625.github.io/.git/objects/80/ea33159495d15bf293eb1c0217cecb27c53e87": "e4202a82af45e6151e55efa0312192db",
"musaddiq625.github.io/.git/objects/8a/14823ca8eccfd141abc2265046a67cad6259ed": "b8155b372d7f5cc39c97c6afadf8b94d",
"musaddiq625.github.io/.git/objects/10/40dc4baa3597c5b0fddbfdf6768af14aa70a16": "13a484c9e0a17ea2648ca10bef8f3507",
"musaddiq625.github.io/.git/objects/10/f655516fc2899c97e2168ce0e351e924ff3d47": "9cc483e9c8517e1c4f0a4f1157e0f287",
"musaddiq625.github.io/.git/objects/19/fb385c93230b109150cb07b7d4e060ede064f9": "e216cef63e8530dec934d407a9de9d44",
"musaddiq625.github.io/.git/objects/26/590863578dd378198dfca270023a68b11fac23": "09bbe784a98a2cb227580d28ff417a18",
"musaddiq625.github.io/.git/objects/07/c7e234c4f2465d769bfcd4a1810003f02790bf": "36b6fb76e52e22693ee8b5ae6b0acfe7",
"musaddiq625.github.io/.git/objects/38/42c66ea82d5abb8e6b6973f0ddabf657541c7d": "73aefeca07558f4932ccf489c3188390",
"musaddiq625.github.io/.git/objects/5c/7fc5291ea73ba2fd9689a847f621fe312ef8dd": "7b95e3cb1739a1af727c966372e9f993",
"musaddiq625.github.io/.git/objects/09/1907869a7ebaa6df7f495ecc42d98772b15f29": "d03332a3c9a9075b00c43e37d61446bf",
"musaddiq625.github.io/.git/objects/65/df9293386bc1635f93151b748a657326246dc6": "9a2a231c295c6b71dffe1baa80f34955",
"musaddiq625.github.io/.git/objects/62/730e20bd10a4adc747c5d2b7341de9233081b4": "70926446ca34571b6ed628a2785d7768",
"musaddiq625.github.io/.git/objects/37/a83f10c020bbbf90584ab060e7b4e35cf5c6bb": "e05b6097370d358b2d439f41f2958522",
"musaddiq625.github.io/.git/objects/01/2413afe7f49fd008d4b6eb84259f1f61e8bab7": "e6b1a3b4bdccbcff7a0b383765e3be36",
"musaddiq625.github.io/.git/objects/d5/f532d46c50a1bf266875275d8ba2e4aca6db3b": "51a389843d4c98fbff2c630cc5f33f9d",
"musaddiq625.github.io/.git/objects/f9/f8050c168decd38a86f9c572ff15e7eadad410": "2470a0bb673dd8ef7dde46780383a3d7",
"musaddiq625.github.io/.git/objects/ff/3341646798e31c6721d075428c5f123cfa43b0": "aca114c66412dc89a66d2f21a90e00bd",
"musaddiq625.github.io/.git/objects/c5/52058bb3cce53d8df9c030253224890a30cc8b": "7c27a0d954f0d9e4dcf68c46bf8c7676",
"musaddiq625.github.io/.git/objects/46/38415c14fbeae503fdbf939deab1e73d54f0a9": "7c6c166fd627256f2f96ca445c5f380f",
"musaddiq625.github.io/.git/objects/77/01236f494f9e850ce356a7b6e625bd03c4cea3": "26cda1d3122ee763ccd9417f5acb938e",
"musaddiq625.github.io/.git/objects/48/0a3257f83ad0851b662f42961bb20f12bc9df2": "512d3d0952c5c324c30c17efe75652a8",
"musaddiq625.github.io/.git/objects/84/42eebc01af32436db53aa2433165eedf3ccbda": "8de9dfe92933dae13655ae362cb5881f",
"musaddiq625.github.io/.git/objects/4f/f468b4f5ef0718f38ffe9454afa617abb3a153": "ec53cba89b86d527f3f5fb70f91280bf",
"musaddiq625.github.io/.git/objects/12/df54b5439192e9780b48a9b3ec656c7cb0c1dc": "f4b04b5a2ebf1214bd70076b964f9def",
"musaddiq625.github.io/.git/objects/8c/d0ab23fca79177b4b7490ec1627692b149ba8a": "b2ddec75dcf5bfcf61abe4d6fa50b88e",
"musaddiq625.github.io/.git/objects/1d/b5ad68e27646b8ae76610245ed0d41ba80d024": "64861919ab0841e3f2024457c5732124",
"musaddiq625.github.io/.git/objects/71/01c9cdcbff80b63804dd1b5d5a857375947606": "975ef798ebca520a08bc9e7f8f63acf4",
"musaddiq625.github.io/.git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
"musaddiq625.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"musaddiq625.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"musaddiq625.github.io/.git/logs/HEAD": "5ab822ed1c456f6f50c0c3e798d9f3fe",
"musaddiq625.github.io/.git/logs/refs/heads/main": "eee83091d51ad4c90214a7a1acabe755",
"musaddiq625.github.io/.git/logs/refs/remotes/origin/HEAD": "6ef4dbb605df8f494b524e8bba3b474d",
"musaddiq625.github.io/.git/logs/refs/remotes/origin/main": "74b9d6b497c451e61ca8730a4e560a3c",
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
"musaddiq625.github.io/.git/refs/heads/main": "e16d6e154b9f8c3fa83eb8cfd244a495",
"musaddiq625.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"musaddiq625.github.io/.git/refs/remotes/origin/main": "e16d6e154b9f8c3fa83eb8cfd244a495",
"musaddiq625.github.io/.git/index": "124cd966a0b65aec338c57dcf0f1ca1a",
"musaddiq625.github.io/.git/packed-refs": "313ce1c62c58554611dcecd084a90b86",
"musaddiq625.github.io/.git/COMMIT_EDITMSG": "9246f84640ca7e0e4355934045fb60f9",
"musaddiq625.github.io/.git/FETCH_HEAD": "35352add5b8509db6fae90fdddce6089",
"musaddiq625.github.io/digitwars/flutter_bootstrap.js": "d59b3ff3ee2e2efed9ead0c12105f69d",
"musaddiq625.github.io/digitwars/version.json": "6da34b7541acd7b4045d36be6190cc8b",
"musaddiq625.github.io/digitwars/index.html": "f22f83c4182bf08f4a890503847042a6",
"musaddiq625.github.io/digitwars/main.dart.js": "3ab35256a61ae3d6bee2676ca2ce8178",
"musaddiq625.github.io/digitwars/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"musaddiq625.github.io/digitwars/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"musaddiq625.github.io/digitwars/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"musaddiq625.github.io/digitwars/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"musaddiq625.github.io/digitwars/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"musaddiq625.github.io/digitwars/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"musaddiq625.github.io/digitwars/manifest.json": "069e4e392bd57a8d6b3e11f5d3fc25d0",
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
