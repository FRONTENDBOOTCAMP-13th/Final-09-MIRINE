"use client";
import { Perfume } from "@/types/perfume";
import styles from "./bottomSheet.module.css";
import { addml, addPriceTemplate } from "@/lib/clientFunction";
import { useState } from "react";
import CartItem from "../../CartItem/CartItem";

export default function BottomSheet({ data, isOpen, onClose }: { data: Perfume; isOpen: boolean; onClose: () => void }) {
  const [toggleSelectBtn, setToggleSelectBtn] = useState(false);
  const [totalPrice, setTotalPrice] = useState(2000);
  console.log("data", data);
  return (
    <div>
      {isOpen && (
        <div
          className={styles.bottom_sheet}
          onClick={() => {
            setToggleSelectBtn(false);
            onClose();
          }}
        >
          <section className={styles.select_section}>
            <div className={styles.select_volume}>
              <button
                type="button"
                className={styles.select_button}
                onClick={(e) => {
                  e.stopPropagation();
                  setToggleSelectBtn(!toggleSelectBtn);
                }}
              >
                <span>상품을 선택해주세요</span>
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7L9 12L14 7" stroke="var(--black-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <ul className={`${styles.select_list} ${toggleSelectBtn && styles.active}`}>
                {data.extra.volumes.map((e) => (
                  <li key={e} className={styles.select_item}>
                    <button
                      className={styles.select_item_btn}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {data.name} / {addml(e)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cart_section}>
              <ul className={styles.cart_list}>
                <CartItem
                  data={{
                    name: "test",
                    volume: 0,
                    quantity: 0,
                    price: 0,
                  }}
                />
                <CartItem
                  data={{
                    name: "test",
                    volume: 0,
                    quantity: 0,
                    price: 0,
                  }}
                />
                <CartItem
                  data={{
                    name: "마마",
                    volume: 3,
                    quantity: 2,
                    price: 20000,
                  }}
                />
              </ul>
              <div className={styles.total_price}>
                <span>총 금액</span> <span>{addPriceTemplate(totalPrice)}</span>
              </div>
            </div>
            <div className={styles.btn_section}>
              <button className={styles.cart_btn}>장바구니</button>
              <button className={styles.buy_btn}>구매하기</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
