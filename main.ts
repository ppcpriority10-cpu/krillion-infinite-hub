const html = await Deno.readTextFile(new URL("./index.html", import.meta.url));
Deno.serve(() => new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } }));
