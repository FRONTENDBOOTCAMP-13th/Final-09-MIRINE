import styles from "./cartWithItems.module.css";
import ProductItem from "../ProductItem/ProductItem";
import CartControls from "@/components/ShoppingCart/CartControls/CartControls";
import { PrimaryButton } from "@/components/ui/Button/PrimaryButton";

export default function CartWithItems() {
  return (
    <>
      <CartControls />

      <div className={styles.cart}>
        <ul className={styles.cart_list} role="list">
          <ProductItem />
          <ProductItem />
        </ul>

        {/* 배송비 + 상품 금액 */}
        <div className={styles.charge}>
          <p className={styles.delivery_amount}>(배송비 3,000원 + 총 2개의 상품금액 100,000원)</p>
          <p className={styles.total}>Total 103,000원</p>
        </div>

        <PrimaryButton bgColor="black" textColor="blue" line="on" pcWidth="sm" onClick={() => console.log("결제하기")}>
          결제하기
        </PrimaryButton>
      </div>
    </>
  );
}
