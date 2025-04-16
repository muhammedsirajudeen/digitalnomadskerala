import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./globals.css";
import Footer from "@/components/Footer";
import { envConfig } from "@/utils/envConfig";
import GlobalProvider from "./provider/GlobalProvider";
import { Toaster } from "sonner";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        <GoogleOAuthProvider clientId={envConfig.GOOGLE_CLIENTID}>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </GoogleOAuthProvider>
        <Footer/>
      </body>
    </html>
  );
}
