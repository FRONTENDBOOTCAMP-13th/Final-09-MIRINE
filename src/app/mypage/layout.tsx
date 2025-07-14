import "../globals.css";
import MypageAside from "@/components/MypageAside/MypageAside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MypageAside />
      {children}
    </>
  );
}

// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
