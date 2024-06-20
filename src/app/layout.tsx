import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tempus",
  description: "Cutting-edge smartwatches meet timeless design",
  keywords:
    "smartwatch, wearable, health, fitness tracker, connected device, innovation, technology, design, fashion, style, time management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
