import styles from "./butButton.module.css";

export default function BuyButton(){
  const handleAddToCart = () => {
    console.log('구매하기')
  }

  return (
    <div className={styles.button_section}>
      <button className={styles.buy_btn} 
        onClick={handleAddToCart}>
        구매하기
      </button>
    </div>
  )
  
}