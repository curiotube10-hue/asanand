import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maya Rao — Mathematics Portfolio",
  description:
    "Writings, publications, handouts, and academic work by student mathematician Maya Rao.",
  authors: [{ name: "Maya Rao" }],
  openGraph: {
    title: "Maya Rao — Mathematics Portfolio",
    description:
      "Expository writing, mathematical handouts, and selected academic work.",
    type: "website",
    siteName: "Maya Rao — Mathematics Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Maya Rao — Mathematics Portfolio",
    description:
      "Expository writing, mathematical handouts, and selected academic work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
