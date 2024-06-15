import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import fonts from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Issue tracker made with Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
