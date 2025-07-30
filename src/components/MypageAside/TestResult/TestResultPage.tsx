'use client'
import PerfumeResultList from '@/components/MinineTest/ResultPage/PerfumeResult/PerfumeResult';
import ShareButton from '@/components/MypageAside/TestResult/ShareButton/ShareButton';
import styles from '@/components/MypageAside/TestResult/testResultPage.module.css'
// import { useRouter } from 'next/navigation';

export default function MyPageTestResult(){
  return(
    <>
      <div className={styles.result_container}>
        <div className={styles.date_share_wrapper}>
          <p className={styles.test_date}>2025.07.30 16:38:01</p>
          {/* 공유하기 버튼 */}
          <ShareButton />
        </div>

        <div className={styles.result_items}>
          <PerfumeResultList />
          <PerfumeResultList />
          <PerfumeResultList />
        </div>
      </div>

      <div className={styles.result_container}>
        <div className={styles.date_share_wrapper}>
          <p className={styles.test_date}>2025.07.30 16:38:01</p>
          {/* 공유하기 버튼 */}
          <ShareButton />
        </div>

        <div className={styles.result_items}>
          <PerfumeResultList />
          <PerfumeResultList />
          <PerfumeResultList />
        </div>
      </div>
    </>
    
  )
}