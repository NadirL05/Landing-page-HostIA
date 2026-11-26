// Only telemetry for HostIA's public Sentry project is routed through the Worker.
const org = "4510546774327296";
const project = "4511971818078288";
const endpoint = `https://o${org}.ingest.de.sentry.io/api/${project}/envelope/?hsts=0`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/monitoring" && url.pathname !== "/monitoring/") {
      return env.ASSETS.fetch(request);
    }
    const oldClient = url.searchParams.has("o") || url.searchParams.has("p") || url.searchParams.has("r");
    if (oldClient && (url.searchParams.get("o") !== org || url.searchParams.get("p") !== project ||
        ![null, "de"].includes(url.searchParams.get("r")))) {
      return new Response("Not found", { status: 404 });
    }
    if (!oldClient && (request.method === "GET" || request.method === "HEAD")) {
      return env.ASSETS.fetch(request);
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "POST" } });
    }
    const headers = new Headers();
    for (const name of ["content-type", "content-encoding", "x-sentry-auth"]) {
      const value = request.headers.get(name);
      if (value) headers.set(name, value);
    }
    const upstream = await fetch(endpoint, { method: "POST", headers, body: request.body, redirect: "manual" });
    const responseHeaders = new Headers({ "cache-control": "no-store" });
    for (const name of ["content-type", "retry-after", "x-sentry-rate-limits"]) {
      const value = upstream.headers.get(name);
      if (value) responseHeaders.set(name, value);
    }
    return new Response(upstream.body, { status: upstream.status, headers: responseHeaders });
  },
};
