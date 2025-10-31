import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STR Mix - Shree Tulasi Ready Mix Concrete | M5–M60 Concrete Solutions",
  description: "Premium quality ready-mix concrete (RMC) supplier with 20+ years of experience. M5–M60 grades, on-site delivery, and trusted service.",
  keywords: ["STR Mix", "Shree Tulasi", "Ready Mix Concrete", "RMC", "Construction", "Building Materials", "Concrete Supplier"],
  authors: [{ name: "STR Mix Team" }],
  icons: {
    icon: "https://z-cdn-media.chatglm.cn/files/ab0b5c5e-58df-46d9-a00f-375bf0f1a256_pasted_image_1761923913963.jpg?auth_key=1761927532-909201fe5c9543d69e8415128e02e7b0-0-b9b48a3707ad98c3367f46a713ab640a",
  },
  openGraph: {
    title: "STR Mix - Shree Tulasi Ready Mix Concrete",
    description: "Premium quality ready-mix concrete (RMC) supplier with 20+ years of experience. M5–M60 grades, on-site delivery, and trusted service.",
    url: "https://strmix.com",
    siteName: "STR Mix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STR Mix - Shree Tulasi Ready Mix Concrete",
    description: "Premium quality ready-mix concrete (RMC) supplier with 20+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
