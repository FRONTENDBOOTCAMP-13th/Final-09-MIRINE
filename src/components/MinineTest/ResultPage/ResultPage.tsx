import TestHeader from "@/components/MinineTest/Header/Header";
import TestButton from "@/components/MinineTest/ResultPage/Button/TestButton";
import PerfumeResultList from "@/components/MinineTest/ResultPage/PerfumeResult/PerfumeResult";
import styles from "@/components/MinineTest/ResultPage/resultPage.module.css"
import Share from "@/components/MinineTest/ResultPage/Share/Share";

export default function ResultPage() {
  return (
    <div className={styles.result_page}>
      <TestHeader />

      <h1 className={styles.title}>당신의 향수는?</h1>

      {/* 테스트 결과 */}
      <ul className={styles.result}>
        <PerfumeResultList />
        <PerfumeResultList />
        <PerfumeResultList />
      </ul>

      <p className={styles.text}>{`*결과는 '미리내 테스트 결과'에서 다시 확인이 가능합니다.`}</p>
      
      {/* 홈이동, 다시하기 버튼 */}
      <TestButton />

      {/* 공유하기 */}
      <Share />

    </div>
  )
}