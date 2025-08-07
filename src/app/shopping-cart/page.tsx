"use client";
import CartWithItems from "@/components/ShoppingCart/CartWithItem/CartWithItems";
import EmptyCart from "@/components/ShoppingCart/EmptyCart/EmptyCart";
import styles from "./page.module.css";
import Container from "@/components/ui/Container";
import useShoppingCartStore from "@/store/shoppingCartStore";

export default function ShoppingCartPage() {
  const shoppingCart = useShoppingCartStore((state) => state.shoppingCart);
  return (
    <Container pcWidth="sm">
      <h2 className={styles.title}>장바구니</h2>
      {!shoppingCart.length ? <EmptyCart /> : <CartWithItems />}
    </Container>
  );
}
