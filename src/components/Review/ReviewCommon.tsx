// import Link from "next/link";
import styles from "./reviewCommon.module.css";
import Image from "next/image";

export default function ReviewCommon(){
  return(
    <div>
      <title className={styles.title}>리뷰</title>
      <div className={styles.btn_group}>
        <button className={styles.mirine}>미리내</button>
        <button className={styles.perfume}>향수</button>
        <button className={styles.aroma_shooter}>아로마슈터</button>
      </div>
    </div>
  )
}