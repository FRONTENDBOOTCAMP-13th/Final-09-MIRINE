'use Client';
import { useRouter } from "next/navigation";
import styles from "./emptyCart.module.css";

export default function EmptyCart() {
  const router = useRouter();

  return (
    <div className={styles.empty_text}>
      <p className={styles.text}>장바구니에 담긴 상품이 없습니다</p>
      <button 
        type="button"
        className={styles.btn_shopping}
        onClick={() => router.push('/perfumes')}
        >
        쇼핑하러 가기</button>
    </div>
  );
}
