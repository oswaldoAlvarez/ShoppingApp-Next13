import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Navbar } from "@/components";
import QueryProviders from "@/providers/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping App",
  description: "Shopping for Products!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <div>
        <Navbar /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProviders>{children}</QueryProviders>
      </body>
      {/* </div> */}
    </html>
  );
}
