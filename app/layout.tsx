import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trevor Streng",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-[url('/images/tree_bark.png')]`}
        style={{ backgroundAttachment: "fixed" }}
      >
        <Header />
        <main className="grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
