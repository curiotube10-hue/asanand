import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete mathematics portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Maya Rao — Mathematics Portfolio<\/title>/i);
  assert.match(html, /High school student interested in number theory/);
  assert.match(html, /Writings &amp; Publications/);
  assert.match(html, /Mathematical Activities/);
  assert.match(html, /School/);
  assert.match(html, /Olympiad/);
  assert.match(html, /<details class="nav-disclosure">/);
  assert.match(html, /Skip to main content/);
  assert.doesNotMatch(
    html,
    /Currently exploring|Working principle|Reuse &amp; corrections|Read abstract|View outline/,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});
