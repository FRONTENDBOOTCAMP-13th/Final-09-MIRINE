import styles from "@/components/MinineTest/ResultPage/perfumeResult.module.css"
import Image from "next/image";

export default function PerfumeResult(){
  return(
    <div className={styles.result}>
      {/* 향수 결과 정보 */}
      <div className={styles.item}>
        <Image src="/" alt="향수 이미지" width="40" height="40" className={styles.item_img} />
        <div className={styles.item_info}>
          <p className={styles.brand_name}>브랜드</p>
          <p className={styles.product_name}>향수이름</p>
        </div>
        {/* 바로가기 버튼 */}
        <button type="submit" className={styles.btn}>바로가기</button>
      </div>
    </div>
  )
}