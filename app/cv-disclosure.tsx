"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function CvDisclosure({ children }: { children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#cv" && detailsRef.current) {
        detailsRef.current.open = true;
      }
    };

    const openFromLink = (event: MouseEvent) => {
      const target = event.target;

      if (
        target instanceof Element &&
        target.closest('a[href="#cv"]') &&
        detailsRef.current
      ) {
        detailsRef.current.open = true;
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    document.addEventListener("click", openFromLink);

    return () => {
      window.removeEventListener("hashchange", openFromHash);
      document.removeEventListener("click", openFromLink);
    };
  }, []);

  return (
    <details id="cv" className="section cv-disclosure" ref={detailsRef}>
      <summary className="cv-summary">CV</summary>
      <div className="cv-content">{children}</div>
    </details>
  );
}
