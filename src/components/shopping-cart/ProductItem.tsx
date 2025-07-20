// 상품 아이템
import Image from "next/image";
import styles from "./CartWithItem/cartWithItems.module.css";
export default function ProductItem() {
  return (
    <li className={styles.cart_item}>
      <input type="checkbox" />
      <Image src="/" alt="alt-text" width="40" height="40" className={styles.item_img} />
      <div className={styles.item_info}>
        <p className={styles.brand_name}>브랜드</p>
        <p className={styles.product_name}>향수이름 / 용량</p>
        {/* 수량버튼 */}
        <div className={styles.btn_volume}>
          <button type="button" className={styles.btn_minus}>
            <Image src="/icon/Icon-minus.svg" alt="감소" width={11} height={11} />
          </button>
          <span className={styles.volume}>1</span>
          <button type="button" className={styles.btn_plus}>
            <Image src="/icon/Icon-plus.svg" alt="증가" width={11} height={11} />
          </button>
        </div>
      </div>
      <p className={styles.product_price}>50,000원</p>
    </li>
  );
}
