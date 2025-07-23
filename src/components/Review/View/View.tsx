// import Link from "next/link";
import styles from "./view.module.css";
import Image from "next/image";

export default function View(){
  return (
    <div className={styles.view}>
      {/* 프로필 이미지 & 유저 정보 */}
      <div className={styles.user_section}>
        <Image src="/" alt="alt-text" width={360} height={360} className={styles.image} />
          <div className={styles.user_info}>
            <p className={styles.name}>이름</p>
            <p className={styles.date}>날짜</p>
            <p className={styles.time}>시간</p>
          </div>
          <div className={styles.star}>별점</div>

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