"use client";

import { useEffect } from "react";

type MathJaxWindow = Window & {
  MathJax?: {
    tex?: { inlineMath: string[][] };
    options?: { skipHtmlTags: string[] };
    typesetPromise?: () => Promise<unknown>;
  };
};

export default function MathJaxLoader() {
  useEffect(() => {
    const mathWindow = window as MathJaxWindow;
    const existingScript = document.getElementById("mathjax-script");

    if (mathWindow.MathJax?.typesetPromise) {
      void mathWindow.MathJax.typesetPromise();
      return;
    }

    if (existingScript) {
      return;
    }

    mathWindow.MathJax = {
      tex: { inlineMath: [["\\(", "\\)"]] },
      options: {
        skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      },
    };

    const script = document.createElement("script");
    script.id = "mathjax-script";
    script.src =
      "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
