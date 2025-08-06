"use client";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function TestHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image className={styles.m_logo} src="/logo/logo-black-mobile.svg" alt="로고" width="66" height="16" />
          {/* <Image className={styles.pcLogo} src="/logo/logo-black-pc.svg" alt="로고" width="115" height="28" /> */}
        </Link>
      </h1>

      <Link href="/" className={styles.home_logo}>
        <Image src="/icon/Icon-home.svg" alt="모바일 홈" width="24" height="24" />
      </Link>
    </header>
  );
}
