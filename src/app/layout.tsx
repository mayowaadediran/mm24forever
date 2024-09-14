import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montaga } from "next/font/google";
import "./globals.css";
// import Nav from "@/layout/nav";

const montaga = Montaga({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-montaga',
});



const garait = localFont({
  src: "/fonts/GARAIT.ttf",
  variable: "--font-garait",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MM24Forever",
  description: "Wedding website for Mayowa & Mosimiloluwa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${garait.variable} ${montaga.variable} antialiased`}
      >
        <main className="bg-purple-bg min-h-svh">
          {/* <Nav /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
