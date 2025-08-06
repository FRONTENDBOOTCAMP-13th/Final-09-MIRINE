"use client";
import styles from "@/components/ShoppingCart/CartControls/cartControls.module.css";
import { SmallButton } from "@/components/ui/Button/SmallButton";

export default function CartControls({ checkedArray, checkedArrayHandle, deleteItemInShoppingCart }: { checkedArray; checkedArrayHandle: () => void; deleteItemInShoppingCart: () => void }) {
  return (
    <div className={styles.btn_group}>
      <SmallButton
        ButtonColor="black"
        onClick={() => {
          checkedArrayHandle();
        }}
      >
        전체 {checkedArray.every((e) => e) ? "해제" : "선택"}
      </SmallButton>

      <SmallButton
        ButtonColor="orange"
        onClick={() => {
          deleteItemInShoppingCart();
        }}
      >
        선택 삭제
      </SmallButton>
    </div>
  );
}
