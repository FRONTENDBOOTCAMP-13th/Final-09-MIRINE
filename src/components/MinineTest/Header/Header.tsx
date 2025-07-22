"use client";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TestHeader(){
  const router = useRouter();
  const handlePrev = () => {
    router.back();
  }

  return (
    <header className={styles.header} >
			<button onClick={handlePrev} className={styles.prev_btn} type="submit">
				<Image src="/icon/Icon-prev.svg" alt="이전으로 이동" width="24" height="24" />
			</button>

      <h1 className={styles.logo}>
        <Link href="/">
          <Image className={styles.m_logo} src="/logo/logo-black-mobile.svg" alt="로고" width="66" height="16" />
          {/* <Image className={styles.pcLogo} src="/logo/logo-black-pc.svg" alt="로고" width="115" height="28" /> */}
				</Link>
      </h1>

      <button type="submit">
        <Link href="/">
          <Image className={styles.home_logo} src="/icon/Icon-home.svg" alt="모바일 홈" width="24" height="24" />
        </Link>
      </button>
    </header>
  );
}