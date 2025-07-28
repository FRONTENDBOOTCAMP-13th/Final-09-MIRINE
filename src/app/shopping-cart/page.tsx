'use client'
import CartControls from "@/components/ShoppingCart/CartControls/CartControls";
import CartWithItems from "@/components/ShoppingCart/CartWithItem/CartWithItems";
import EmptyCart from "@/components/ShoppingCart/EmptyCart/EmptyCart";
import styles from "./page.module.css";

export default function ShoppingCartPage() {
  return (
    <div>
      <h2 className={styles.title}>장바구니</h2>

      {/* <EmptyCart /> */}
      <CartWithItems />
    </div>
  );
}
