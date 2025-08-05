"use client";
import { useState } from "react";
import styles from "./mirineListSection.module.css";
import Image from "next/image";
export default function MirineListSection() {
  const [mirineList, setMirineList] = useState<{ id: number; name: string; path: string }[]>([
    { id: 4, name: "a", path: "/" },
    { id: 4, name: "a", path: "/" },
    { id: 4, name: "a", path: "/" },
  ]);
  return (
    <section className={styles.mirine_bottom_sheet}>
      <ul className={styles.mirine_list}>
        {mirineList.map((e) => (
          <li key={e.name}>
            <div className={styles.mirine_item}>
              <Image src={e.path} alt="alt" width={50} height={50} />
              <button
                className={styles.delete_item_btn}
                onClick={() => {
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
        {mirineList.length < 5 ? (
          Array.from({ length: 5 }).map((_, i) => {
            if (i > mirineList.length - 1) {
              return (
                <li key={i}>
                  <div className={styles.mirine_item}>{i + 1}</div>
                </li>
              );
            }
          })
        ) : (
          <li>
            <div className={styles.mirine_item}>{mirineList.length + 1}</div>
          </li>
        )}
      </ul>
      <p className={styles.required_cnt_description}>*최소 5개 필수 선택</p>
      <div className={styles.button_section}>
        <button
          className={`${styles.buy_btn} ${mirineList.length >= 5 && styles.active}`}
          onClick={() => {
            alert("장바구니에 미리내 담기");
          }}
        >
          <span>총 {mirineList.length}개</span> 장바구니 담기
        </button>
      </div>
    </section>
  );
}
