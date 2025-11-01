'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "51a31ba3df61dbbcd523cfc49e399999",
".git/config": "0a77bfc8bbda78374648632397031833",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e53c90e71cb599936374c997add2170",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1901d19b1fe035b6e6f1219e1291d531",
".git/logs/refs/heads/main": "e77e64b620f1b3cb14572bcaff1bbba8",
".git/logs/refs/remotes/origin/main": "3e6aa5693e00a6795add7465f9786980",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/06/554b854a9ec74360b0eba7407a9d8a076af903": "1b4e3bc8ac5d3bc477fa20b8798d52c7",
".git/objects/0e/0835c24f09bd8380bf8764718c463b807b668d": "3c39b274c45f876c214026c34033c0e5",
".git/objects/0e/7bf1c22ff95db54b7dccbbeccfd34793a807d9": "f8b3943b775f30070384e361a37731a4",
".git/objects/18/fb5d074136543a1075de20ceaca4db62e5a102": "451bb713611c7cc5fe039f3bbd067230",
".git/objects/19/c4b4797e37c7b885eec6c54a39c24bd1527f6b": "b7ff5f219e291c00f277b6cce81ec595",
".git/objects/1a/74431a7fe251c478a4f5063f09caa71427bae6": "33cb4cba25e19e54d67555b03e3833d1",
".git/objects/1c/141f4f36f5215157d7b732bdf6a5d7a5aa8d3a": "3a6ffeb800e0654806749dbf43099398",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/e727a82c0eceb3b6f2bdbf408b1eb74559cdc6": "bf6f8fbd4287f87c908116c91ad2eb26",
".git/objects/25/5d8feaecca0750f2d6efb80799c0236c0bc663": "85fa7d674891b174d53ad6b73420cce8",
".git/objects/27/e5a62e059c7936b59405bfa5b24964c79c0d0c": "fb07ca838e57128167f55bd829651a22",
".git/objects/28/1ae55d195a903c27940ccc33f801bb4830ac1e": "160b22756ee71f5876f6c58fd41016ca",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/fc4a3452e816657bd2a2179d675121a8c55fab": "19327f292b6beb33daff1d9ecdfe78cc",
".git/objects/3a/1ff81a7bedeb04fb5a537cf301d2a5cd781bba": "8cb381be6896765197545ec1360c7274",
".git/objects/43/6b01daae1d82d295c94bbf833523c35d4e5d68": "55a4915fb880760aadec620a728c79fd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/69b3b6000b21c7e3f87451a66f3a45281a4865": "f4e789a40c2157b673f6c276b6ad97d9",
".git/objects/49/92ef4a223c5cd77d9ea4241a62f7bd2a4c0ca8": "349d9fd7fd5469ef86a7bd8ca16e8d6f",
".git/objects/4b/c4d3370a280c5e166567a0ca910177bb212599": "af6e8a5a4629b3ea1263b17787784917",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/58/fc34e67f92e3c2bb1c02ed1cb4428e175e3881": "12ead2717ae3e6ed1e1f9610821fa3de",
".git/objects/5d/350b534841655b219bbb1d4b973473c68e4b6d": "e29a789d47f23c2ef46c4dc1b6ee2acf",
".git/objects/68/f5fde15a13a47ebb2d089cb438d5e110daa616": "eb296e1d3da6ca28c833e849f0c7260f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/9d75e0a0ffb087709c310a35514eeed680c828": "e5582696798a6f32efdc43fbf19c60f0",
".git/objects/70/e8e1291a4be1d7812c95347f3a111e4ce57f36": "4d1243fef57d03e3e45f889ff393f199",
".git/objects/78/bf577ca11bbe480b361a4b326587035daf8e0f": "378325c2d19ac145e0709b6909934707",
".git/objects/7a/3ac22bc957529ef6fd06ff421b361abdb320e6": "862a4db427b2fdf8817528c8502f9d66",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/073e8d95b64cab2cc5bc8db0c21694e2a8b3d5": "bdbdd00b5bb6d8577162a8353fbe1838",
".git/objects/7d/92ea1e39b319ac08b6b3de541ecace07887d0b": "68730ca4c8cd0b2673ef1f7ef2c5db02",
".git/objects/81/522c3773f2e026fb2569fe7d274166eeee78b6": "dd2bfdeb821d2dbd9e9849743d50dbbc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/66ef47784de8a531c2941c6ca20ade4ceedfcb": "0b2cf09d94b6c21e26e063815f0c2599",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b0f96def155ecbde41b2c54b088b1178fbf58c": "bdf3e579f4c695a1fbbfbe2898ce1b3b",
".git/objects/8a/cd2d44fc65df8e65f6df47fdb27bd12df960f0": "91e631367a0344b112902187218c6812",
".git/objects/91/ea6742c99863bf7b5c47342e62adfe314e6b29": "8034ad4644c832b9e96e20869f38ece4",
".git/objects/96/21f7d444200fe318615202ffb387f709c6c9b2": "e11cd45c82996b3bcb778f3b2825c380",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/1ca7c0712d2cfc702b0b09a69734931898e8fd": "1c2797ac206fbfc80ca01345e1ff1f4a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/61cad9b38527176eafacc034ce5eff7ebecd34": "28eaa626aefe38823847f69740658096",
".git/objects/a5/7cce1e3ade4e123c37c15fde2b6d68555c3e97": "5f010de07f2ab2e4d79bae0023d7e355",
".git/objects/a6/abdfc96d3d5d4e535483a0b1de61d4264d3e9d": "c05f778251c458cc43c863ef9ba7d426",
".git/objects/a6/b31d4aeb9a8025121ea244b14b0e0c112b65f8": "a3fea7a91bbd44162bb918b9c3382c49",
".git/objects/aa/dc8f2d0f03b8fa0584bd8d2fcbb362136817c1": "1cd0469518b9c2df0ccdc689480d55fd",
".git/objects/ac/4db4d1d001acdcef6ace081d1dc5e3cce74e18": "f3872e4d4e7daef50e8d56857eff5b20",
".git/objects/b0/e1cded15204d4c7bf0a5180a8883b997f6af80": "63d3ce243bc072cc23203e6263b221e5",
".git/objects/b1/08b2a2e5ce25e05194392c5f8c937a1dc422ca": "2ae07628acead63825537433fde7a654",
".git/objects/b1/de07b9a3ba90930eec7750fa8fb3dc52159415": "deb21ef4e1c81d6d79d5c8870b1eef10",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5ca0d59542c09921baf8d7f52a0fb2f49af2a2": "7f0c854844e7f5a7ffc33c0bcf49406a",
".git/objects/be/a5e731313dfbf84a14e8bf02f666be5f52af57": "1142b55686e59972986809025cba3047",
".git/objects/bf/e058668a75a94f490614ce120e1aa275939167": "4dc9ed6eed40f90b812b184e069912aa",
".git/objects/c2/25b8abdc86d5d67431dc43053ba8c2206aabf1": "0cf7a81e96fcc1828806cf56b48a1c6a",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/4f7a54e60fd162b9567b2e93b0917871131ef4": "fc91927ee4bd9043d841b4d1b7f377fe",
".git/objects/c7/8fd95463a9c98b7f67d188d961f8852d4b1366": "4935d8f714af28dbd21fc0cbed6cea10",
".git/objects/c7/d97a45094510b3cb4015921460344692e4e22f": "cbf35796668f36071a6f564907b21632",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/5c274ed2eef3f1eef9ad6a5e9f277279e9d996": "796cdff76d66ea62887ea57eb69e8ea9",
".git/objects/d1/762a89123672910591c582dd8130d686ba8265": "85c7fbb371ffdf5b9cd4b61ff2cfa55d",
".git/objects/d1/e5b8d21d7ac7a09cc7673f82ce24afa3d3da08": "7651ffe54407eec887a2f29fb9fd64b4",
".git/objects/d4/202454e61d3abadc4d97e32c006518b3d3604c": "95f0c3bfe5699c14e6c1435ca5c81202",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/4ca514e756559e37f68640f2f48958cffb3283": "6ff0274f3b0770f1eed19aad1eb406eb",
".git/objects/d9/705f14ef594dc4bc1de0ea9b0181895a246f25": "7e63648b6c38371a6af39847c080999c",
".git/objects/d9/e0644b4e383df99ded1418b036d221f2b2047d": "22dc6c45480ca446ef5bc1798eb4b90d",
".git/objects/da/8167d95b43912779dd6a0e761d0fddd534375e": "aaf64673f27cf208974537e98fb0c0ab",
".git/objects/db/887f5fd57d437d5517638666dc6c62ddf4eb7d": "9769da53abe872dab6739a7645242432",
".git/objects/db/a3e2aae074fd42d295126156ebd9e396fd9f36": "d42f8729ca99f9ea26e587f9a39f67f4",
".git/objects/dc/73dfd8d83670fdf5777f6f1ca5c2873ffd882c": "81057e48dbd21485f0ba8c1b7e20a82d",
".git/objects/dc/8e02b95a0b9ee116d1db1d8ca3c00c7e31b96d": "b73f2b14da8338e4b62e4f2545ca8a41",
".git/objects/e0/43d157ced962306d7c25aea3de88156dacf358": "2d20f3d65a8bef51b73ec65be3bf6090",
".git/objects/e1/9966d4bb21cf869033fd0da21fa926a751bde2": "08ccfe90149d0fa43e34b878c6edc525",
".git/objects/e2/697850e1151a8a02d5d06345f6df28af4b1e3e": "5707284cf123862d71962a169e286c5b",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/a90880bedc5668c8474fac987d93a26e4f95c8": "34b24e2311b5fa56e85d779d01c0143a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/c9fe598b0ba401e3f662d38d685b0e07d3085d": "b964c7967157ca26345c82989dbbea0b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/77b2613e528231471dfdcf957373a1676d38f9": "8fd87e5464536bec6b32604745600112",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "476694ec2a5f513af9b988de58483572",
".git/refs/remotes/origin/main": "476694ec2a5f513af9b988de58483572",
"assets/AssetManifest.bin": "8e77992afcc11e9625ea4c603e2c817d",
"assets/AssetManifest.bin.json": "75aaa524e79ae84c21a2a0d4094707a1",
"assets/AssetManifest.json": "0f261fb49a21e14c6c1371f513e6cea1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bc3a6d33236c10a22f5003954c4ffc33",
"assets/lib/data/qr.jpg": "37ffbb35bc924b661ee938357455652b",
"assets/lib/data/questions.json": "a6537d0e9501b3f0216ea8a9ddd36ea2",
"assets/lib/data/resources/q1.jpg": "3e6cbf942b51ad468d81c55141b9f027",
"assets/lib/data/resources/q1055.jpg": "5d0da8dce64534d133e8dc21485b497d",
"assets/lib/data/resources/q13.jpg": "2b87e918a8436cbad1c99a48d88b0705",
"assets/lib/data/resources/q243.jpg": "a8241998880c1f6c06a8fbd65e4edfde",
"assets/lib/data/resources/q286.jpg": "32400ca689e45a661d8ad0b07e32a1ba",
"assets/lib/data/resources/q383.jpg": "1575fb3e95415efb8bb5e500fa060ac5",
"assets/lib/data/resources/q388.jpg": "fe5d845ddd9368fedce81c60136948f7",
"assets/lib/data/resources/q39.jpg": "b746d3659d36011f1e3230a6dc147860",
"assets/lib/data/resources/q400.jpg": "1575fb3e95415efb8bb5e500fa060ac5",
"assets/lib/data/resources/q574.jpg": "1575fb3e95415efb8bb5e500fa060ac5",
"assets/lib/data/resources/q678.jpg": "53c12cb016670a45c2b1b18e2a4f7621",
"assets/lib/data/resources/q682.jpg": "da084ddff424766156163423e94898f3",
"assets/lib/data/resources/q777.jpg": "22bdfb7d070014861f752a91e5388e17",
"assets/lib/data/resources/q880.jpg": "c5ebc473c50aec55ce2e117fcbbd80f7",
"assets/lib/data/resources/q897.jpg": "cea3862eb7c8c353ec84d697bacf3bfa",
"assets/lib/data/resources/q899.jpg": "67df8e83a78cbd74088a217220baf89a",
"assets/lib/data/resources/q906.jpg": "983a68dcad4770929544c8739f681f62",
"assets/lib/data/resources/q910.jpg": "203ab5d53fffd49733f5627760f7f56b",
"assets/NOTICES": "7ea3285823eb2e2ed5a844dd211a217d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "c2fa3681600a29962a98e00f7135690d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "887ca803c30d1590ed35ce770cbaa3a4",
"/": "887ca803c30d1590ed35ce770cbaa3a4",
"main.dart.js": "7fdcbf8d4ed9f6456dc3efb1de90437a",
"manifest.json": "9baaa471e7f5a325a76f20d1185ca05c",
"version.json": "6c46a088943ff020a4765103173f3c77"};
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
