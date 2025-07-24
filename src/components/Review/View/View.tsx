// import Link from "next/link";
import styles from "./view.module.css";
import Image from "next/image";

export default function View(){
  return (
    <div className={styles.view}>
      {/* 프로필 이미지 & 리뷰 작성 정보 */}
      <div className={styles.user_section}>
        <Image src="/image/perfume1.svg" alt="리뷰 이미지" width={360} height={406} className={styles.image} />
          {/* 점 */}
          <div className={styles.indicators}>
            <button type="button" className={styles.indicator_active}></button>
            <button type="button" className={styles.indicator}></button>
            <button type="button" className={styles.indicator}></button>
            <button type="button" className={styles.indicator}></button>
            <button type="button" className={styles.indicator}></button>
          </div>
          {/* 리뷰 작성 정보 */}
          <div className={styles.review_info}> 
            <div className={styles.user_info}>
              <p className={styles.name}>이름</p>
              <p className={styles.datetime}>날짜 시간</p>
            </div>
            {/* 별점 */}
            <div className={styles.star}>별점</div>
          </div>

          {/* 제품정보 */}
          <div className={styles.product_info}>
            <div className={styles.brand}>브랜드</div>
            <div className={styles.product_name}>향수이름 / 용량</div>
          </div>
          {/* 후기 텍스트 */}
          <div className={styles.review_text}>
            <p>text</p>
          </div>
      </div>
      
    </div>
  )
}