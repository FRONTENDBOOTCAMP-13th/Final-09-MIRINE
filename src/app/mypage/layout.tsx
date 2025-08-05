"use client";

import Container from "@/components/ui/Container";
import MypageAside from "@/components/MypageAside/MypageAside";
import styles from "./layout.module.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const optionGroups = [
    {
      title: "내 정보",
      options: [
        { value: "/mypage/profile", label: "내 정보" },
        { value: "/mypage/wishlist", label: "찜 리스트" },
        { value: "/mypage/myreviews", label: "내 리뷰" },
        { value: "/mypage/mirine-test-result", label: "미리내 테스트 결과" },
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

  const getCurrentPageTitle = () => {
    console.log(pathname);

    for (const group of optionGroups) {
      const foundOption = group.options.find((option) => option.value === pathname);
      if (foundOption) {
        return foundOption.label;
      }
    }
    return "내 정보"; //기본값
  };

  const currentTitle = getCurrentPageTitle();

  return (
    <>
      <Container>
        <div className={styles.mypage_header}>
          <nav className={styles.breadcrumb}>마이페이지 &gt; {currentTitle}</nav>
          <h1 className={styles.current_title}>{currentTitle}</h1>
        </div>
        <div className={styles.mypage_layout}>
          <MypageAside className={styles.mypage_sidebar} groups={optionGroups} />
          <div className={styles.mypage_content}>{children}</div>
        </div>
      </Container>
    </>
  );
}
