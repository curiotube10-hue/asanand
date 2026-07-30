import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("host") ??
    "maya-rao-math-portfolio.ipsanand.chatgpt.site";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const previewImage = `${protocol}://${host}/og.png`;

  return {
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
      images: [
        {
          url: previewImage,
          width: 1733,
          height: 907,
          alt: "Maya Rao — Mathematics Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Maya Rao — Mathematics Portfolio",
      description:
        "Expository writing, mathematical handouts, and selected academic work.",
      images: [previewImage],
    },
  };
}

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
