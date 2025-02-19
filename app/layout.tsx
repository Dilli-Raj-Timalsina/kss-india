import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin X",
  description: "Admin panel generator by entity definition !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body //min-h-screen prevents footer from getting in middle of page
        className={cn(
          `${geistSans.variable} ${geistMono.variable}  min-h-screen bg-background font-sans antialiase scroll-smooth	text-foreground	flex flex-col touch-none`
          // "bg-gray-400"
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
