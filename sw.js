/* Service worker de Cargas.
   Su único trabajo es que la app abra sin cobertura, que es la situación
   normal en un gimnasio. Guarda el armazón en caché y lo sirve desde ahí;
   por detrás busca una versión nueva para el próximo arranque.

   Los datos de entreno NO pasan por aquí: viven en localStorage. */

const CACHE = "cargas-v4";
const ARMAZON = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ARMAZON))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ns => Promise.all(ns.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;

  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return; // tipografías y demás: al navegador

  e.respondWith(
    caches.match(req).then(guardado => {
      const red = fetch(req).then(resp => {
        if(resp && resp.ok){
          const copia = resp.clone();
          caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        }
        return resp;
      }).catch(() => guardado || caches.match("./index.html"));

      return guardado || red;
    })
  );
});
