import styles from "../styles/emptyCart.module.css";

export default function EmptyCart() {
  return (
    <div className={styles.shopping_cart}>
      <h2 className={styles.header}>장바구니</h2>
      <div className={styles.btn_group}>
        <button className={styles.btn_delete}>전체 선택</button>
        <button className={styles.btn_selection}>선택 삭제</button>
      </div>
      
      <p className={styles.text}>장바구니에 담긴 상품이 없습니다</p>
      <button className={styles.btn_shopping}>쇼핑하러 가기</button>
    </div>
    
  );
}