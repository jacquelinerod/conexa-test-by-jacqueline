import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Rick and Morty characters compared",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-gradient-to-r from-gray-800 to-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
