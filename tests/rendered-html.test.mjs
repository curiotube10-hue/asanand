import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pdfFiles = [
  "basic-inequalities-olympiad.pdf",
  "complex-bash.pdf",
  "eteam-2025-strange-lifts-presentation.pdf",
  "eteam-2025-strange-lifts-report.pdf",
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
  assert.match(
    html,
    /Hello! I am Adhiraj Singh Anand, a high school student based in Gurugram\./,
  );
  assert.match(html, /broadly interested in Number Theory\./);
  assert.match(
    html,
    /My current work revolves around the Frobenius coin and Postage Stamp problems, and some Algebraic number theory\./,
  );
  assert.match(
    html,
    /I love cubing \(3x3, 5x5 and FMC\) and playing Geoguessr\./,
  );
  assert.match(
    html,
    /src="\/adhiraj-singh-anand\.png" alt="Adhiraj Singh Anand"/,
  );
  assert.match(html, /My paltry attempt at a mathematical joke/);
  assert.match(html, /40-million-digit Mersenne prime/);
  assert.match(html, /Up to isomorphism/);
  assert.match(html, /Writings &amp; Publications/);
  assert.match(html, /Mathematics Competitions &amp; Honors/);
  assert.match(html, /Postage Stamp Problem and Compound Sequences/);
  assert.match(html, /Mathematics 100\/100/);
  assert.match(html, /Elliptic Curves and Uniform Distribution/);
  assert.match(html, /Selected through the program for ETEAM\./);
  assert.match(
    html,
    /href="\/pdfs\/geometric-bertrand-imaginary-quadratic-rings\.pdf"/,
  );
  assert.match(
    html,
    /href="\/pdfs\/eteam-2025-strange-lifts-presentation\.pdf"/,
  );
  assert.match(
    html,
    /href="\/pdfs\/eteam-2025-strange-lifts-report\.pdf"/,
  );
  assert.match(html, /href="https:\/\/eteam\.tfjm\.org\/"/);
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
    /Currently exploring|Working principle|Reuse &amp; corrections|Read abstract|View outline|Selected Coursework|Otterbein/,
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

test("the chosen portrait asset is present and valid", async () => {
  const portrait = await readFile(
    new URL("../public/adhiraj-singh-anand.png", import.meta.url),
  );
  assert.deepEqual(
    [...portrait.subarray(0, 8)],
    [137, 80, 78, 71, 13, 10, 26, 10],
  );
});
