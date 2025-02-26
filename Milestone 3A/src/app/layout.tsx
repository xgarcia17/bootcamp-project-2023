
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import Navbar from "./components/navbar";
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xavier's Personal Website",
  description: "A personal website for Xavier Garcia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar/>
            {children}
        </body>
      </html>
    </>
  );
}

