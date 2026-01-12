import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Using a CSS variable fallback for mono font to avoid Turbopack build issues
const geistMono = {
  variable: "--font-geist-mono",
};

export const metadata: Metadata = {
  title: "Mecarvi Technologies - Welcome to Our Mecarvi Signs",
  description: "Wanna know more about out us please have a look below and explore us more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
