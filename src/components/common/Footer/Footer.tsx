"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/mirine-test") return;
  else {
    return (
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <Image
            width={66}
            height={16}
            src="logo/logo-purple-mobile.svg"
            alt="미리내 로고"
            className={styles.logo}
          />
          <ul className={styles.f_menu}>
            <li>
              <a href="/terms">이용약관</a>
            </li>
            <li>
              <a href="/privacy">개인정보처리방침</a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright &copy; 2025 미리내 All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}
