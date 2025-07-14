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
