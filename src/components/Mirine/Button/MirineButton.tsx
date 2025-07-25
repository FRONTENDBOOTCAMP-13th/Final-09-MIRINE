import styles from "./mirineButton.module.css";
import Link from "next/link";

export default function MirineButton(){
  return (
    <div className={styles.mirin_btn_section}>
      <button className={styles.mirine_cart_btn}>미리내 담기</button>
    </div>
  )
  
}