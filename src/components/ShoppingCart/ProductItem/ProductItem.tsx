// 상품 아이템
import Image from "next/image";
import styles from "./productItem.module.css";

export default function ProductItem() {
  return (
    <li className={styles.cart_item}>
      <label htmlFor="item_select">
        <input id="item_select" type="checkbox" className={styles.checkbox} />
      </label>

      <Image src="/image/perfume1.svg" alt="향수 이미지" width={40} height={40} className={styles.item_img} />
      <div className={styles.item_info}>
        <div className={styles.name}>
          <div className={styles.brand_name}>브랜드</div>
          <div className={styles.product_name}>향수이름 / 용량</div>
        </div>

        <div className={styles.count_control}>
          <div className={styles.btn_count}>
            <button type="button" className={styles.btn_minus}>
              <Image src="/icon/Icon-minus.svg" alt="감소" width={11} height={11} />
            </button>
            <span className={styles.count}>1</span>
            <button type="button" className={styles.btn_plus}>
              <Image src="/icon/Icon-plus.svg" alt="증가" width={11} height={11} />
            </button>
          </div>

          <div className={styles.product_price}>50,000원</div>
        </div>
      </div>
    </li>
  );
}
