/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { DM_Sans } from "next/font/google";


const dmsans= DM_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Taabs",
	description:
		"Discover Taabs, the ultimate Chrome extension designed to enhance your browsing efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
