import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calahan Pressure Washing LLC | Bloomington, IN",
  description:
    "Calahan Pressure Washing LLC provides pressure washing and soft washing services in Bloomington, Indiana. Driveways, concrete, decks, fences, homes, and commercial properties.",
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