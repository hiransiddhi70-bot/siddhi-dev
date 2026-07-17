const CACHE_NAME = "siddhi-dev-v1";

const urlsToCache = [

"./",

"./index.html",

"./style.css",

"./script.js",

"./projects.js",

"./certificates.js",

"./manifest.json"

];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache => cache.addAll(urlsToCache))

);

});

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)

.then(response => {

return response || fetch(event.request);

})

);

});

self.addEventListener("activate", event => {

event.waitUntil(

caches.keys().then(keys =>

Promise.all(

keys.map(key => {

if(key !== CACHE_NAME){

return caches.delete(key);

}

})

)

)

);

});
