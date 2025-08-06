"use client";
import PerfumeResultList from "@/components/MinineTest/ResultPage/PerfumeResult/PerfumeResult";
import ShareButton from "@/components/pages/Mypage/TestResult/ShareButton/ShareButton";
import styles from "@/components/pages/Mypage/TestResult/testResultPage.module.css";
// import { useRouter } from 'next/navigation';

export default function MyPageTestResult() {
  return (
    <>
      <ul className={styles.result_list}>
        <li>
          <div className={styles.list_head}>
            <p className={styles.test_date}>2025.07.30 16:38:01</p>
            {/* 공유하기 버튼 */}
            <ShareButton />
          </div>

          <ul className={styles.result_item_list}>
            <PerfumeResultList />
            <PerfumeResultList />
            <PerfumeResultList />
          </ul>
        </li>

        <li>
          <div className={styles.list_head}>
            <p className={styles.test_date}>2025.07.30 16:38:01</p>
            {/* 공유하기 버튼 */}
            <ShareButton />
          </div>

          <ul className={styles.result_item_list}>
            <PerfumeResultList />
            <PerfumeResultList />
            <PerfumeResultList />
          </ul>
        </li>
      </ul>
    </>
  );
}
