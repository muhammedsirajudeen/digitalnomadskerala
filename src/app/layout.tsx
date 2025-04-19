import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Footer from "@/components/Footer";
import { envConfig } from "@/utils/envConfig";
import GlobalProvider from "./provider/GlobalProvider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import Head from "next/head";
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
  description: `A community for the growing indie hackers and digital nomads of kerala. 
  A place for creative minds to rejoice`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Digital Nomads Kerala" />
        <meta property="og:description" content="A community for the growing indie hackers and digital nomads of Kerala. A place for creative minds to rejoice" />
        <meta property="og:image" content="https://digitalnomadskerala.in/banner.jpg" />
        <meta property="og:url" content="https://digitalnomadskerala.in/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="Digital Nomads Kerala" />
        <meta name="twitter:title" content="Digital Nomads Kerala" />
        <meta name="twitter:description" content="A community for the growing indie hackers and digital nomads of Kerala." />
        <meta name="twitter:image" content="https://digitalnomadskerala.in/banner.jpg" />

      <meta name="keywords" content="Digital Nomads, Kerala, Indie Hackers, Remote Work, Kerala Community, Digital Kerala"/>
      <meta name="robots" content="index, follow"/>
      <meta name="author" content="Digital Nomads Kerala"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="canonical" href="https://digitalnomadskerala.in/"/>

        {/* <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Digital Nomads Kerala",
            "url": "https://digitalnomadskerala.in",
            "logo": "https://digitalnomadskerala.in/logo.png",
            "description": "A community for indie hackers and digital nomads of Kerala.",
            "sameAs": [
              "https://twitter.com/yourhandle",
              "https://instagram.com/yourhandle"
            ]
          })}
        </script> */}

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
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
