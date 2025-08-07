"use client";
import styles from "./testStartPage.module.css";
import { useRouter } from "next/navigation";

export default function TestStartPage() {
  const router = useRouter();

  // 테스트 시작하기
  const handleStartTest = () => {
    router.push("/mirine-test/test");
  };
  // 홈으로 이동하기
  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.test_start}>
      <div className={styles.title_wrapper}>
        <h2 className={styles.title}>당신의 향수는?</h2>
      </div>
      <nav className={styles.btn_group}>
        <button type="button" className={`${styles.btn} ${styles.btn_start}`} onClick={handleStartTest}>
          테스트 시작하기
        </button>
        <button type="button" className={`${styles.btn} ${styles.btn_home}`} onClick={handleGoHome}>
          홈으로 이동하기
        </button>
      </nav>
    </div>
  );
}
