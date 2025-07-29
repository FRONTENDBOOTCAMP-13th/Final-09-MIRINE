import styles from "./productInfo.module.css";

export default function ProductInfo(){
  return (
    <div>
      <section className={styles.info}>
        <div className={styles.product_info}>
          <span className={styles.brand_name}>브랜드</span>
          <h2 className={styles.product_name}>제품이름</h2>
          <span className={styles.price}>가격</span>
        </div>
      
        <p className={styles.product_description}>상품 간단 설명</p>

        <div>
          <p className={styles.tag}>#해시태그</p>
        </div>
      </section> 
    </div>
  )
}