import styles from "./nameDateTime.module.css";
import Image from "next/image";

export default function List(){
  return(
    <div className={styles.review_info}> 
      <div className={styles.user_info}>
        <p className={styles.name}>이름</p>
        <p className={styles.datetime}>날짜 시간</p>
      </div>
      {/* 임의로 별점 표시 */}
      <div className={styles.star}>
        <Image src="/icon/Icon-star.svg" alt="리뷰 사진" width={14} height={14} className={styles.star_icon} />
        <Image src="/icon/Icon-star.svg" alt="리뷰 사진" width={14} height={14} className={styles.star_icon} />
        <Image src="/icon/Icon-star.svg" alt="리뷰 사진" width={14} height={14} className={styles.star_icon} />
        <Image src="/icon/Icon-star.svg" alt="리뷰 사진" width={14} height={14} className={styles.star_icon} />
        <Image src="/icon/Icon-star.svg" alt="리뷰 사진" width={14} height={14} className={styles.star_icon} />
      </div>
    </div>
  )
}