"use Client";

import { useRouter } from "next/navigation";
import styles from "./emptyCart.module.css";
import { PrimaryButton } from "@/components/ui/Button/PrimaryButton";

export default function EmptyCart() {
  const router = useRouter();

  return (
    <div className={styles.empty_cart}>
      <p className={styles.alert_text}>장바구니에 담긴 상품이 없습니다</p>
      <PrimaryButton bgColor="white" textColor="black" line="on" pcWidth="sm" onClick={() => router.push("/perfumes")}>
        쇼핑하러 가기
      </PrimaryButton>
    </div>
  );
}
