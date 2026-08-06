import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pdfFiles = [
  "basic-inequalities-olympiad.pdf",
  "complex-bash.pdf",
  "expansions-using-calculus.pdf",
  "geometric-bertrand-imaginary-quadratic-rings.pdf",
  "what-are-matrices-really.pdf",
];

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
  assert.match(
    html,
    /<title>Adhiraj Singh Anand — Mathematics Portfolio<\/title>/i,
  );
  assert.match(html, /Grade 12G student at Delhi Public School R\.K\. Puram/);
  assert.match(html, /Writings &amp; Publications/);
  assert.match(html, /Mathematics Competitions &amp; Honors/);
  assert.match(html, /Postage Stamp Problem and Compound Sequences/);
  assert.match(
    html,
    /href="\/pdfs\/geometric-bertrand-imaginary-quadratic-rings\.pdf"/,
  );
  assert.match(
    html,
    /href="\/pdfs\/basic-inequalities-olympiad\.pdf"/,
  );
  assert.match(html, /href="\/pdfs\/complex-bash\.pdf"/);
  assert.match(html, /href="\/pdfs\/what-are-matrices-really\.pdf"/);
  assert.match(html, /href="\/pdfs\/expansions-using-calculus\.pdf"/);
  assert.match(html, /School/);
  assert.match(html, /Olympiad/);
  assert.match(html, /<details class="nav-disclosure">/);
  assert.match(html, /Skip to main content/);
  assert.doesNotMatch(
    html,
    /Currently exploring|Working principle|Reuse &amp; corrections|Read abstract|View outline|Selected Coursework/,
  );
  assert.doesNotMatch(
    html,
    /Maya Rao|Hello! I am Maya|Northbridge|student@example\.com/,
  );
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("all linked portfolio PDFs are present and valid", async () => {
  for (const filename of pdfFiles) {
    const pdf = await readFile(
      new URL(`../public/pdfs/${filename}`, import.meta.url),
    );
    assert.equal(
      pdf.subarray(0, 5).toString("ascii"),
      "%PDF-",
      `${filename} is not a valid PDF`,
    );
  }
});
