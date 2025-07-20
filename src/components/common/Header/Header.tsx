/* 
"use client";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {isMobileMenuOpen && <div className={styles.backdrop}></div>}
      <div
        ref={wrapperRef}
        className={`${styles.mobileWrapper} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <header className={styles.header}>
          <div className={styles.navLeft}>
            <ul className={styles.navList}>
              <li>
                <Link
                  href="/mirine"
                  className={pathname === "/mirine" ? styles.highlight : ""}
                >
                  미리내
                </Link>
              </li>
              <li>
                <Link
                  href="/perfumes"
                  className={pathname === "/perfumes" ? styles.highlight : ""}
                >
                  향수
                </Link>
              </li>
              <li>
                <Link
                  href="/aroma-shooter"
                  className={
                    pathname === "/aroma-shooter" ? styles.highlight : ""
                  }
                >
                  아로마슈터
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.logo}>
            <Link href="/">
              <img
                src="/header/logo.svg"
                alt="로고"
                className={styles.logoImage}
              />
            </Link>
          </div>

          <div className={styles.navRight}>
            <ul className={styles.navList}>
              <li>
                <Link
                  href="/reviews"
                  className={pathname === "/reviews" ? styles.highlight : ""}
                >
                  리뷰
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={pathname === "/login" ? styles.highlight : ""}
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  href="/mypage"
                  className={pathname === "/mypage" ? styles.highlight : ""}
                >
                  마이페이지
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-cart"
                  className={
                    pathname === "/shopping-cart" ? styles.highlight : ""
                  }
                >
                  장바구니
                </Link>
              </li>
            </ul>

            <button className={styles.hamburger} onClick={toggleMobileMenu}>
              <img
                src="/header/Icons.svg"
                alt="메뉴 열기"
                className={styles.hamburgerIcon}
              />
            </button>
          </div>
        </header>

        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul>
            <div className={styles.mobile_top}>
              <li>
                <Link
                  href="/mirine"
                  className={pathname === "/mirine" ? styles.highlight : ""}
                >
                  미리내
                </Link>
              </li>
              <li>
                <Link
                  href="/perfumes"
                  className={pathname === "/perfumes" ? styles.highlight : ""}
                >
                  향수
                </Link>
              </li>
              <li>
                <Link
                  href="/aroma-shooter"
                  className={
                    pathname === "/aroma-shooter" ? styles.highlight : ""
                  }
                >
                  아로마슈터
                </Link>
              </li>
            </div>
            <div className={styles.mobile_bottom}>
              <li>
                <Link
                  href="/reviews"
                  className={pathname === "/reviews" ? styles.highlight : ""}
                >
                  리뷰
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={pathname === "/login" ? styles.highlight : ""}
                >
                  로그인
                </Link>
              </li>
              <li>
                <Link
                  href="/mypage"
                  className={pathname === "/mypage" ? styles.highlight : ""}
                >
                  마이페이지
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-cart"
                  className={
                    pathname === "/shopping-cart" ? styles.highlight : ""
                  }
                >
                  장바구니
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
 */



"use client"

import Link from "next/link";
import styles from "./header.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";


export default function Header() {
	const router = useRouter();
	const pathname = usePathname();

  const handlePrev = () => {
    router.back();
  }

	// console.log(pathname);

	useEffect(() => {
		const sideNav = document.querySelector("#sideNav");
		if(sideNav && sideNav.classList.contains(styles.open)){
			// console.log(11);
			sideNav.classList.remove(styles.open);
		}
	}, [pathname]);


	return (
		<header className={styles.header}>
			<div className={styles.inner}>
				{(pathname === '/mirine' || pathname === '/perfumes') && (
					<button onClick={handlePrev} className={styles.prevBtn}>
						<img src="/icon/Icon-prev.svg" alt="이전으로 이동"/>
					</button>
				)}

				<ul className={styles.navLeft}>
					<li><Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>미리내</Link></li>
					<li><Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>향수</Link></li>
					<li><Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>아로마슈터</Link></li>
				</ul>

				<h1 className={styles.logo}>
					<Link href="/">
						<img className={styles.mLogo} src="/logo/logo-black-mobile.svg" alt="로고"/>
						<img className={styles.pcLogo} src="/logo/logo-black-pc.svg" alt="로고"/>
					</Link>
				</h1>

				<ul className={styles.navRight}>
					<li><Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>리뷰</Link></li>
					<li><Link href="/login" className={pathname === "/login" ? styles.active : ""}>로그인</Link></li>
					<li><Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>마이페이지</Link></li>
					<li><Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>장바구니</Link><span className={styles.cartCnt}>0</span></li>
				</ul>

				<button className={styles.sideNavBtn} onClick={() => document.querySelector(`.${styles.sideNav}`)?.classList.toggle(styles.open)}>
					<img src="/icon/Icon-right-toggle-menu.svg" alt="모바일 토글 메뉴"/>
				</button>
			</div>

			<div id="sideNav" className={styles.sideNav}>
				<ul className={styles.mainMenu}>
					<li><Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>미리내</Link></li>
					<li><Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>향수</Link></li>
					<li><Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>아로마슈터</Link></li>
				</ul>
				<ul className={styles.subMenu}>
					<li><Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>리뷰</Link></li>
					<li><Link href="/login" className={pathname === "/login" ? styles.active : ""}>로그인</Link></li>
					<li><Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>마이페이지</Link></li>
					<li><Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>장바구니</Link><span className={styles.cartCnt}>0</span></li>
				</ul>
			</div>
		</header>
	);
}

