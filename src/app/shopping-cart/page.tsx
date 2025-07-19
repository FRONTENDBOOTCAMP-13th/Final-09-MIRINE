import CartWithItems from "@/app/shopping-cart/components/CartWithItems";
import EmptyCart from "@/app/shopping-cart/components/EmptyCart";
import styles from "./styles/common.module.css";

export default function ShoppingCartPage() {
  return (
    <div className={styles.shopping_cart}>
      <h2 className={styles.header}>장바구니</h2>
      <div className={styles.btn_group}>
        <button type="button" className={styles.btn_delete}>
          전체 선택
        </button>
        <button type="button" className={styles.btn_selection}>
          선택 삭제
        </button>
      </div>

      <EmptyCart />
      {/* <CartWithItems /> */}
    </div>
  );
}
