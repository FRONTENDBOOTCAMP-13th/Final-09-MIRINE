"use client";
import styles from "./cartWithItems.module.css";
import ProductItem from "../ProductItem/ProductItem";
import CartControls from "@/components/ShoppingCart/CartControls/CartControls";
import { PrimaryButton } from "@/components/ui/Button/PrimaryButton";
import useShoppingCartStore from "@/store/shoppingCartStore";
import { useEffect, useState } from "react";
import { MirineItemInState } from "@/store/mirineStore";
import { addPriceTemplate, productTotalPrice } from "@/lib/clientFunction";

export default function CartWithItems() {
  const shoppingCart = useShoppingCartStore((state) => state.shoppingCart);
  const deleteItem = useShoppingCartStore((state) => state.deleteItem);
  const [checkedArray, isCheckedArray] = useState(new Array<boolean>(shoppingCart.length).fill(false));
  const [totalPrice, setTotalPrice] = useState(0);
  const shippingFee = 3000;

  useEffect(() => {
    const cartList = shoppingCart.map((e, i) => {
      if (checkedArray[i]) {
        if (e.type === "p") return { quantity: (e.content as [number, string, number, number, number])[3], price: (e.content as [number, string, number, number, number])[4] };
        else if (e.type === "m") return { quantity: 1, price: (e.content as MirineItemInState[]).reduce((sum, e) => e.price / 10 + sum, 0) };
        else return { quantity: 0, price: 0 };
      } else return { quantity: 0, price: 0 };
    });
    setTotalPrice(productTotalPrice(cartList));
  }, [shoppingCart, checkedArray]);
  return (
    <div>
      <CartControls
        checkedArray={checkedArray}
        checkedArrayHandle={() => {
          if (checkedArray.every((e) => e)) isCheckedArray(new Array<boolean>(shoppingCart.length).fill(false));
          else isCheckedArray(new Array<boolean>(shoppingCart.length).fill(true));
        }}
        deleteItemInShoppingCart={() => {
          shoppingCart.forEach((e, i) => {
            if (checkedArray[i]) deleteItem(e);
          });
          isCheckedArray(() => new Array<boolean>(shoppingCart.length).fill(false));
        }}
      />

      <div className={styles.cart}>
        <ul className={styles.cart_list} role="list">
          {shoppingCart.map((e, i) => (
            <ProductItem
              key={e.content.toString()}
              data={e}
              isChecked={checkedArray[i]}
              checkedArrayHandle={() => {
                checkedArray[i] = !checkedArray[i];
                isCheckedArray([...checkedArray]);
              }}
            />
          ))}
        </ul>

        {/* 배송비 + 상품 금액 */}
        <div className={styles.charge}>
          <p className={styles.delivery_amount}>
            (배송비 {addPriceTemplate(shippingFee, "won")} + 총 {shoppingCart.length}개의 상품금액 {addPriceTemplate(totalPrice, "won")})
          </p>
          <p className={styles.total}>Total {addPriceTemplate(totalPrice + shippingFee)}</p>
        </div>

        <PrimaryButton bgColor="black" textColor="blue" line="on" pcWidth="sm">
          결제하기
        </PrimaryButton>
      </div>
    </div>
  );
}
