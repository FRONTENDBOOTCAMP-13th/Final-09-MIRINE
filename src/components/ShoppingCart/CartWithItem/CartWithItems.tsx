// 상품 있을 때
import styles from "./cartWithItems.module.css";
import ProductItem from "../ProductItem";

export default function CartWithItems() {
  return (
    <>
      {/* 장바구니 제품 추가 */}
      <ul className={styles.cart_list}>
        <ProductItem />
        <ProductItem />
      </ul>

      {/* 배송비 + 상품 금액 */}
      <div className={styles.charge}>
        <p className={styles.delivery_amount}>(배송비 3,000원 + 총 2개의 상품금액 100,000원)</p>
        <p className={styles.total}>Total 103,000원</p>
      </div>

      <button type="submit" className={styles.btn_payment}>
        결제하기
      </button>
    </>
  );
}
