"use client";

import { useRef, useState } from "react";
import readerPages from "./reader-pages.json";

export default function DocumentReader({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const viewport = useRef<HTMLDivElement>(null);
  const slug = href.split("/").pop()?.replace(/\.pdf$/, "") ?? "";
  const total = readerPages[slug as keyof typeof readerPages];
  const assetRoot = href.replace(/\/pdfs\/([^/]+)\.pdf$/, "/readers/$1");

  function turnPage(next: number) {
    setPage(next);
    viewport.current?.scrollTo({ top: 0, left: 0 });
  }

  return (
    <details
      className="document-reader"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary aria-label={`Read ${title} inline`}>Read inline</summary>
      {open ? (
        <div className="reader-panel">
          <div className="reader-toolbar">
            <span>{title}</span>
            <a href={href} target="_blank" rel="noopener noreferrer">
              Open PDF ↗
            </a>
          </div>
          <div className="reader-controls" role="group" aria-label={`${title} reader controls`}>
            <button type="button" disabled={page === 1} onClick={() => turnPage(page - 1)} aria-label="Previous page">←</button>
            <span aria-live="polite" aria-atomic="true">Page {page} of {total}</span>
            <button type="button" disabled={page === total} onClick={() => turnPage(page + 1)} aria-label="Next page">→</button>
            <div className="reader-zoom">
              <button type="button" disabled={zoom === 100} onClick={() => setZoom(zoom - 25)} aria-label="Zoom out">−</button>
              <span aria-live="polite">{zoom}%</span>
              <button type="button" disabled={zoom === 200} onClick={() => setZoom(zoom + 25)} aria-label="Zoom in">+</button>
            </div>
          </div>
          <div className="reader-viewport" ref={viewport} tabIndex={0} role="region" aria-label={`${title}, page ${page}`}>
            <img
              key={page}
              src={`${assetRoot}/${page}.webp`}
              alt={`Page ${page} of ${title}`}
              className="reader-page"
              style={{ width: `${zoom}%` }}
              decoding="async"
            />
          </div>
          <p className="reader-fallback">
            <a href={`${assetRoot}/${page}.txt`} target="_blank" rel="noopener noreferrer">Page text</a>
            <span aria-hidden="true"> · </span>
            <a href={href}>Read the PDF directly</a>
          </p>
        </div>
      ) : null}
    </details>
  );
}
