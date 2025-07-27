import styles from "./mirineButton.module.css";
import Link from "next/link";

export default function MirineButton(){
  const handleAddToCart = () => {
    console.log('미리내 담기')
  }

  return (
    <div className={styles.mirin_cart_section}>
      <button className={styles.mirine_cart_btn} 
        onClick={handleAddToCart}>
        미리내 담기
      </button>
    </div>
  )
  
}