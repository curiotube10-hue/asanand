import type { Metadata } from "next";
import MathJaxLoader from "./mathjax-loader";
import "./globals.css";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://maya-rao-math-portfolio.ipsanand.chatgpt.site";
const metadataBase = new URL(
  configuredSiteUrl.endsWith("/") ? configuredSiteUrl : `${configuredSiteUrl}/`,
);
const previewImage = new URL("og.png", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: "Adhiraj Singh Anand — Mathematics Portfolio",
  description:
    "Research, writings, honors, and mathematical handouts by Adhiraj Singh Anand.",
  authors: [{ name: "Adhiraj Singh Anand" }],
  openGraph: {
    title: "Adhiraj Singh Anand — Mathematics Portfolio",
    description:
      "Research manuscripts, mathematical handouts, honors, and selected academic work.",
    type: "website",
    siteName: "Adhiraj Singh Anand — Mathematics Portfolio",
    images: [
      {
        url: previewImage,
        width: 1731,
        height: 909,
        alt: "Adhiraj Singh Anand — Mathematics Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhiraj Singh Anand — Mathematics Portfolio",
    description:
      "Research manuscripts, mathematical handouts, honors, and selected academic work.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MathJaxLoader />
      </body>
    </html>
  );
}
