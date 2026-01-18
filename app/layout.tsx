import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruhmare Dev Profile",
  description: "Bruhmare Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href={`/favicon.png?v=${new Date().getTime()}`} />
      </head>
      <body className="m-0 p-0">{children}</body>
    </html>
  );
}