// 상품 있을 때
import styles from "../styles/cartWithItems.module.css";

export default function CartWithItems() {
  return (
    <div className={styles.shopping_cart}>
      <h2 className={styles.header}>장바구니</h2>
      <div className={styles.btn_group}>
        <button className={styles.btn_delete}>전체 선택</button>
        <button className={styles.btn_selection}>선택 삭제</button>
      </div>

      {/* 장바구니 제품 추가 */}
      <ul className={styles.cart_list}>
        <li className={styles.cart_item}>
          <input type="checkbox" />
          <img src="/" className={styles.item_img}/>
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름 / 용량</p>
            {/* 수량버튼 */}
            <div className={styles.btn_volume}>
              <button className={styles.btn_minus}>-</button>
              <span className={styles.volume}>1</span>
              <button className={styles.btn_plus}>+</button>
            </div>  
          </div>
          <p className={styles.product_price}>50,000원</p>
        </li>
      </ul>

      {/* 장바구니 제품 추가 */}
      <ul className={styles.cart_list}>
        <li className={styles.cart_item}>
          <input type="checkbox" />
          <img src="/" className={styles.item_img}/>
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름 / 용량</p>
            {/* 수량버튼 */}
            <div className={styles.btn_volume}>
              <button className={styles.btn_minus}>-</button>
              <span className={styles.volume}>1</span>
              <button className={styles.btn_plus}>+</button>
            </div>  
          </div>
          <p className={styles.product_price}>50,000원</p>
        </li>
      </ul>

      {/* 배송비 + 상품 금액 */}
      <div className={styles.charge}>
        <p className={styles.delivery_amount}>(배송비 3,000원 + 총 2개의 상품금액 100,000원)</p>
        <p className={styles.total}>Total 103,000원</p>
      </div>
      
      <button className={styles.btn_payment}>결제하기</button>
    </div>
      
  );
}
