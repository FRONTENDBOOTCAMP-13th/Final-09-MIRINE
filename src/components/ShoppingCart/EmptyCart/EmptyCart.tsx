import styles from "./emptyCart.module.css";

export default function EmptyCart() {
  return (
    <>
      <p className={styles.text}>장바구니에 담긴 상품이 없습니다</p>
      <button className={styles.btn_shopping}>쇼핑하러 가기</button>
    </>
  );
}
