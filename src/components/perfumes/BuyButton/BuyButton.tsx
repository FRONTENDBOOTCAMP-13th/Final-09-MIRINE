'use client'
import styles from "./buyButton.module.css";

interface BuyButtonProps {
  onClick: () => void;
}

export default function BuyButton({onClick}: BuyButtonProps){
  return (
    <div className={styles.button_section}>
      <button className={styles.buy_btn} 
        onClick={onClick}>
        구매하기
      </button>
    </div>
  )
  
}