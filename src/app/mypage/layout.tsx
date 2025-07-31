import "../globals.css";
import MypageAside from "@/components/MypageAside/MypageAside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const optionGroups = [
    {
      title: '내 정보',
      options: [
        { value: '/profile', label: '내 정보' },
        { value: '/wishlist', label: '찜 리스트' },
        { value: '/myreviews', label: '내 리뷰' },
        { value: '/mirine-test-result', label: '미리내 테스트 결과' },
      ],
    },
    // {
    //   title: '배송 관련',
    //   options: [
    //     { value: '/', label: '구매 내역' },
    //     { value: '/', label: '배송 현황' },
    //     { value: '/', label: '교환 및 환불' },
    //   ],
    // },
  ];

  return (
    <>
      <MypageAside groups={optionGroups} />
      {children}
    </>
  );
}

// import { Geist } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
