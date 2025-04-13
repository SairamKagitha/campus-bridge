import Loader from "@/components/loader";
import Providers from "@/components/providers";
import { Toaster } from "@/elements/sonner";
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Campus Bridge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.variable + roboto.variable}>
        <Suspense fallback={<Loader />}>
          <Providers>
            {children}
            <Toaster position="top-right" richColors />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
