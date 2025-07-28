import TestHeader from "@/components/MinineTest/Header/Header";
import PerfumeResultList from "@/components/MinineTest/ResultPage/PerfumeResult/PerfumeResult";
import styles from "@/components/MinineTest/ResultPage/resultPage.module.css"
import Image from "next/image";

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
      <div className={styles.btn_group}>
        <button 
          type="button" 
          className={styles.home_btn}>홈으로 이동하기</button>
        <button 
          type="button" 
          className={styles.again_btn}>테스트 다시하기</button>
      </div>

      {/* 공유하기 */}
      <div className={styles.share}>
        <button 
          type="button" 
          className={styles.kakao}>
          <Image src="/icon/Icon-kakao.svg" alt="링크" width="42" height="42" />
        </button>
        <button 
          type="button" 
          className={styles.link}>
          <Image src="/icon/Icon-link5.svg" alt="링크" width="42" height="42" />
        </button>
      </div>

    </div>
  )
}