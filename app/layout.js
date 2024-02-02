import "./globals.css";
import Header from "./header";
import Search from "./search";
import Footer from "./footer";
import Head from "next/head";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "ElecScoot",
  description: "Page Description",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`}>
      <Head>
        <link rel="icon" href="../public/electric-scooter.svg" sizes="any" />
      </Head>
      <body className="min-h-screen">
        <Header />
        <Search />
        {children}
        <Footer />
      </body>
    </html>
  );
}
