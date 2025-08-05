'use client'
import styles from '@/components/MinineTest/ResultPage/PerfumeResult/perfumeResult.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function PerfumeResultList(){
  const router = useRouter();

  const handleGoPage = () => {
    router.push('/perfumes');
  }

  return(
    <div className={styles.result_section}>
      {/* 향수 결과 정보 */}
      <div className={styles.perfume}>
        <Image src="/image/perfume-test.webp" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
        <div className={styles.perfume_info}>
          <p className={styles.brand_name}>브랜드</p>
          <p className={styles.product_name}>향수이름</p>
        </div>
        {/* 바로가기 버튼 */}
        <button 
          type="button" 
          className={styles.go_btn}
          onClick={handleGoPage}
          >바로가기</button>
      </div>
    </div>
  )
}