"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, signOut } from "../../../api/firebase/firebase";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpenning, setIsOpenning] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handlePrev = () => {
    router.back();
  };

  useEffect(() => {
    setIsOpenning(false);
  }, [pathname]);

  // Kakao SDK
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("5f119b39694599fdc09f409b96af8449");
      }
    };
    document.head.appendChild(script);
  }, []);

  // 로그인 상태 확인
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        const kakao = localStorage.getItem("kakaoLogin");
        const naver = localStorage.getItem("naverLogin");
        if (kakao === "true") {
          setUser({ kakao: true });
        } else if (naver === "true") {
          setUser({ naver: true });
        } else {
          setUser(null);
        }
      }
    });
    return () => unsubscribe();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase logout error:", error);
    }

    // Kakao 로그아웃
    if (window.Kakao && window.Kakao.Auth) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("5f119b39694599fdc09f409b96af8449");
      }

      window.Kakao.Auth.logout(() => {
        console.log("카카오 로그아웃 완료");
        localStorage.removeItem("kakaoLogin");
        setUser(null);
        window.location.reload();
      });
    }

    // Naver 로그아웃
    if (localStorage.getItem("naverLogin") === "true") {
      localStorage.removeItem("naverLogin");
      setUser(null);
      window.location.href = "https://nid.naver.com/nidlogin.logout";
      return;
    }

    localStorage.removeItem("kakaoLogin");
    localStorage.removeItem("naverLogin");
    setUser(null);
    window.location.reload();
  };
  if (pathname === "/mirine-test") return;
  else {
    return (
      <header className={styles.header}>
        <div className={styles.inner}>
          {(pathname === "/mirine" || pathname === "/perfumes") && (
            <button onClick={handlePrev} className={styles.prev_btn}>
              <Image src="/icon/Icon-prev.svg" alt="이전으로 이동" width="24" height="24" />
            </button>
          )}

          <ul className={styles.nav_left}>
            <li>
              <Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>
                미리내
              </Link>
            </li>
            <li>
              <Link href="/mirine-test" className={pathname === "/mirine-test" ? styles.active : ""}>
                미리내 테스트
              </Link>
            </li>
            <li>
              <Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>
                향수
              </Link>
            </li>
            <li>
              <Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>
                아로마슈터
              </Link>
            </li>
          </ul>

          <h1 className={styles.logo}>
            <Link href="/">
              <Image className={styles.m_logo} src="/logo/logo-black-mobile.svg" alt="로고" width="66" height="16" />
              <Image className={styles.pc_logo} src="/logo/logo-black-pc.svg" alt="로고" width="115" height="28" />
            </Link>
          </h1>

          <ul className={styles.nav_right}>
            <li>
              <Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>
                리뷰
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <Link href="/login" className={pathname === "/login" ? styles.active : ""}>
                  로그인
                </Link>
              )}
            </li>
            <li>
              <Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>
                마이페이지
              </Link>
            </li>
            <li>
              <Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>
                장바구니
              </Link>
              <span className={styles.cart_cnt}>0</span>
            </li>
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
            <li>
              <Link href="/mirine" className={pathname === "/mirine" ? styles.active : ""}>
                미리내
              </Link>
            </li>
            <li>
              <Link href="/mirine-test" className={pathname === "/mirine-test" ? styles.active : ""}>
                미리내 테스트
              </Link>
            </li>
            <li>
              <Link href="/perfumes" className={pathname === "/perfumes" ? styles.active : ""}>
                향수
              </Link>
            </li>
            <li>
              <Link href="/aroma-shooter" className={pathname === "/aroma-shooter" ? styles.active : ""}>
                아로마슈터
              </Link>
            </li>
          </ul>
          <ul className={styles.sub_menu}>
            <li>
              <Link href="/reviews" className={pathname === "/reviews" ? styles.active : ""}>
                리뷰
              </Link>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <Link href="/login" className={pathname === "/login" ? styles.active : ""}>
                  로그인
                </Link>
              )}
            </li>
            <li>
              <Link href="/mypage" className={pathname === "/mypage" ? styles.active : ""}>
                마이페이지
              </Link>
            </li>
            <li>
              <Link href="/shopping-cart" className={pathname === "/shopping-cart" ? styles.active : ""}>
                장바구니
              </Link>
              <span className={styles.cartCnt}>0</span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
