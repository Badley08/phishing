// worker.js (Cloudflare Worker)
addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(req) {
  if (req.method === 'POST' && req.url.endsWith('/login')) {
    const data = await req.json();
    // NE PAS STOCKER data.password
    // Ici on simule une "insertion" et on renvoie un message d'avertissement
    return new Response(JSON.stringify({
      status: 'ok',
      note: 'Simulation only — password NOT stored. This endpoint is intentionally non-persistent.'
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response('Not found', { status: 404 });
}
