"use client";
import styles from "./mirineListSection.module.css";
import Image from "next/image";
import useMirineStore, { MirineItemInState } from "@/store/mirineStore";
import useShoppingCartStore from "@/store/shoppingCartStore";
import { seperateArray } from "@/lib/clientFunction";
export default function MirineListSection() {
  const addItem = useShoppingCartStore((state) => state.addItem);
  const deleteItem = useMirineStore((state) => state.deleteItem);
  const resetMirine = useMirineStore((state) => state.resetMirine);
  const mirine = useMirineStore((state) => state.mirine);
  return (
    <section className={styles.mirine_bottom_sheet}>
      <ul className={styles.mirine_list}>
        {mirine.map((e) => (
          <li key={e.name}>
            <div className={styles.mirine_item}>
              <div className={styles.image_wrapper}>
                <Image src={e.path} alt="alt" width={50} height={50} />
              </div>
              <button
                className={styles.delete_item_btn}
                onClick={() => {
                  deleteItem(e);
                  alert("미리내에서 아이템 삭제");
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6.5L6 18.5M6 6.5L18 18.5" stroke="var(--bg-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </li>
        ))}
        {mirine.length < 5 ? (
          Array.from({ length: 5 }).map((_, i) => {
            if (i > mirine.length - 1) {
              return (
                <li key={i}>
                  <div className={styles.mirine_item}>{i + 1}</div>
                </li>
              );
            }
          })
        ) : (
          <li>
            <div className={styles.mirine_item}>{mirine.length + 1}</div>
          </li>
        )}
      </ul>
      <p className={styles.required_cnt_description}>*최소 5개 필수 선택</p>
      <div className={styles.button_section}>
        <button
          className={`${styles.buy_btn} ${mirine.length >= 5 && styles.active}`}
          onClick={() => {
            if (mirine.length >= 5) {
              seperateArray<MirineItemInState>(mirine, 5).forEach((mirineList) => {
                addItem({ type: "m", content: mirineList });
              });
              resetMirine();
              alert("장바구니에 추가 완료");
            }
          }}
        >
          <span>총 {mirine.length}개</span> 장바구니 담기
        </button>
      </div>
    </section>
  );
}
