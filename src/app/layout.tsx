import localFont from "next/font/local";
import "./globals.css";
import "./reset.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const suit = localFont({
  src: "../../public/font/SUIT-Variable-woff2/SUIT-Variable.woff2",
  variable: "--font-suit",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${suit.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
