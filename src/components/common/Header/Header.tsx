"use client"

import Link from "next/link";
import styles from "./header.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenning, setIsOpenning] = useState(false);

  const handlePrev = () => {
    router.back();
  };

  // console.log(pathname);

  useEffect(() => {
    setIsOpenning(false);
  }, [pathname]);

	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				{(pathname === '/mirine' || pathname === '/perfumes') && (
					<button onClick={handlePrev} className={styles.prev_btn}>
						<Image src="/icon/Icon-prev.svg" alt="이전으로 이동" width="24" height="24" />
					</button>
				)}

				<ul className={styles.nav_left}>
					<li><Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>미리내</Link></li>
          <li><Link href="/mirine-test" className={pathname === "/mirine-test" ? styles.active : ""}>미리내 테스트</Link></li>
					<li><Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>향수</Link></li>
					<li><Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>아로마슈터</Link></li>
				</ul>

				<h1 className={styles.logo}>
					<Link href="/">
            <Image className={styles.mLogo} src="/logo/logo-black-mobile.svg" alt="로고" width="66" height="16" />
            <Image className={styles.pcLogo} src="/logo/logo-black-pc.svg" alt="로고" width="115" height="28" />
					</Link>
				</h1>

				<ul className={styles.nav_right}>
					<li><Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>리뷰</Link></li>
					<li><Link href="/login" className={pathname === "/login" ? styles.active : ""}>로그인</Link></li>
					<li><Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>마이페이지</Link></li>
					<li><Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>장바구니</Link><span className={styles.cart_cnt}>0</span></li>
				</ul>

        <button
          className={styles.side_nav_btn}
          onClick={() => {
            setIsOpenning(!isOpenning);
          }}
        >
          <Image src="/icon/Icon-right-toggle-menu.svg" alt="모바일 토글 메뉴" width="24" height="24" />
        </button>
      </div>

      <div className={`${styles.side_nav} ${isOpenning && styles.open}`}>
				<ul className={styles.main_menu}>
					<li><Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>미리내</Link></li>
          <li><Link href="/mirine-test" className={pathname === "/mirine-test" ? styles.active : ""}>미리내 테스크</Link></li>
					<li><Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>향수</Link></li>
					<li><Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>아로마슈터</Link></li>
				</ul>
				<ul className={styles.sub_menu}>
					<li><Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>리뷰</Link></li>
					<li><Link href="/login" className={pathname === "/login" ? styles.active : ""}>로그인</Link></li>
					<li><Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>마이페이지</Link></li>
					<li><Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>장바구니</Link><span className={styles.cartCnt}>0</span></li>
				</ul>
			</div>
		</header>
	);
}
