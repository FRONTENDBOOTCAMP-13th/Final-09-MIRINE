import { addml, addPriceTemplate } from "@/lib/clientFunction";
import styles from "./cartItem.module.css";

export default function CartItem({
  data,
  idx,
  cartList,
  setCartList,
}: {
  data: { name: string; volume: number; quantity: number; price: number };
  idx: number;
  cartList: { volume: number; quantity: number; price: number }[];
  setCartList: React.Dispatch<
    React.SetStateAction<
      {
        volume: number;
        quantity: number;
        price: number;
      }[]
    >
  >;
}) {
  return (
    <li className={styles.cart_item}>
      <div className={styles.top_section}>
        <span>
          {data.name} / {addml(data.volume)}
        </span>
        <button
          onClick={() => {
            setCartList([...cartList.filter((e, i) => i !== idx)]);
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6.5L6 18.5M6 6.5L18 18.5" stroke="var(--black-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={styles.bottom_section}>
        <div className={styles.cnt_section}>
          <button
            className={styles.cnt_dec_btn}
            onClick={() => {
              cartList[idx].quantity--;
              setCartList([...cartList]);
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.5H19" stroke="var(--black-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className={styles.item_cnt}>{data.quantity}</span>
          <button
            className={styles.cnt_inc_btn}
            onClick={() => {
              cartList[idx].quantity++;
              setCartList([...cartList]);
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.5H19M12 5.5V19.5" stroke="var(--black-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <span className={styles.item_price}>{addPriceTemplate(data.price * cartList[idx].quantity)}</span>
      </div>
    </li>
  );
}
