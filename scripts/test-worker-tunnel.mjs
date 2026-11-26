import assert from "node:assert/strict";
import test from "node:test";
import worker from "../cloudflare/worker.mjs";

test("Sentry tunnel accepts both clients and sends only the envelope to HostIA's project", async (t) => {
  const envelope = '{"event_id":"example"}\n{"type":"event"}\n{}';
  const requests = [];
  t.mock.method(globalThis, "fetch", async (url, init) => {
    requests.push({ url, headers: init.headers, body: await new Response(init.body).text() });
    return new Response("test", { status: 429, headers: { "retry-after": "45" } });
  });
  for (const query of ["", "?o=4510546774327296&p=4511971818078288&r=de"]) {
    const request = new Request("https://example.com/monitoring" + query, {
      method: "POST", headers: { "content-type": "application/x-sentry-envelope", cookie: "fixture=1" }, body: envelope,
    });
    const res = await worker.fetch(request, {});
    assert.equal(res.status, 429);
    assert.equal(res.headers.get("retry-after"), "45");
    assert.equal(await res.text(), "test");
  }
  for (const call of requests) {
    assert.equal(call.url, "https://o4510546774327296.ingest.de.sentry.io/api/4511971818078288/envelope/?hsts=0");
    assert.equal(call.body, envelope);
    assert.equal(call.headers.get("cookie"), null);
    assert.equal(call.headers.get("content-type"), "application/x-sentry-envelope");
  }
  const other = new Request("https://example.com/monitoring?o=11&p=22", { method: "POST", body: envelope });
  assert.equal((await worker.fetch(other, {})).status, 404);
  assert.equal(requests.length, 2);
});
