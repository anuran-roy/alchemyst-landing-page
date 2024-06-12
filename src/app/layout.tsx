import { Inter } from "next/font/google";
import Navbar from "./_components/Navigation/Navbar";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alchemyst - Powering the future of the workforce",
  description:
    "Digital employees to multiply the world's workforce potential, one team at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
