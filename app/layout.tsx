import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const previewImage = `${protocol}://${host}/og.png`;

  return {
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
