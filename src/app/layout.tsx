import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: {
    default: "Learning Project",
    template: "%s | Learning Project",
  },
  description: "A professional learning project to master React, Next.js, TypeScript, and Tailwind CSS",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Matus Garay"}],
  creator: "Matus Garay",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
