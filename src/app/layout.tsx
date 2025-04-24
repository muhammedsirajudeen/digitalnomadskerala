import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "@/components/Footer";
import { envConfig } from "@/utils/envConfig";
import GlobalProvider from "./provider/GlobalProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Digital Nomads Kerala",
  description:
    "A community for the growing indie hackers and digital nomads of Kerala. A place for creative minds to rejoice",
  openGraph: {
    title: "Digital Nomads Kerala",
    description:
      "A community for the growing indie hackers and digital nomads of Kerala. A place for creative minds to rejoice",
    url: "https://digitalnomadskerala.in/",
    type: "website",
    images: [
      {
        url: "https://digitalnomadskerala.in/preview.jpg",
        alt: "Digital Nomads Kerala Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Nomads Kerala",
    description:
      "A community for the growing indie hackers and digital nomads of Kerala.",
    images: ["https://digitalnomadskerala.in/preview.jpg"],
  },
  keywords: [
    "Digital Nomads",
    "Kerala",
    "Indie Hackers",
    "Remote Work",
    "Kerala Community",
    "Digital Kerala",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Digital Nomads Kerala" }],
  alternates: {
    canonical: "https://digitalnomadskerala.in/",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Toaster />
        <GoogleOAuthProvider clientId={envConfig.GOOGLE_CLIENTID}>
          <GlobalProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </GlobalProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
