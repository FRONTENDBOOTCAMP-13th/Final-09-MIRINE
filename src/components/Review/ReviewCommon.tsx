// import Link from "next/link";
import styles from "./reviewCommon.module.css";
import Image from "next/image";

export default function ReviewCommon(){
  const itemCount = 123; 

  return(
    <div className={styles.common_section}>
      <h1 className={styles.title}>리뷰</h1>

      <div className={styles.btn_group}>
        <button className={styles.mirine}>미리내</button>
        <button className={styles.perfume}>향수</button>
        <button className={styles.aroma_shooter}>아로마슈터</button>
      </div>

      <div className={styles.count_icon_section}>
        <p className={styles.review_count}>총 {itemCount}개</p>
        <div className={styles.icon_group}>
         <button className={styles.list} type="button">
          <Image src="/icon/Icon-layout-list.svg" alt="리스트" width={18} height={14} />
         </button>
         <button className={styles.grid} type="button">
          <Image src="/icon/Icon-layout-grid.svg" alt="그리드" width={18} height={14} />  
         </button> 
        </div>
      </div>
    </div>
  )
}