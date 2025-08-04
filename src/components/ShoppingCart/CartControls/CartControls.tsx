"use client";
import styles from "@/components/ShoppingCart/CartControls/cartControls.module.css";
import { SmallButton } from "@/components/ui/Button/SmallButton";

export default function CartControls() {
  return (
    <div className={styles.btn_group}>
      <SmallButton ButtonColor="black" onClick={() => console.log("전체 선택")}>
        전체 선택
      </SmallButton>

      <SmallButton ButtonColor="orange" onClick={() => console.log("선택 삭제")}>
        선택 삭제
      </SmallButton>
    </div>
  );
}
