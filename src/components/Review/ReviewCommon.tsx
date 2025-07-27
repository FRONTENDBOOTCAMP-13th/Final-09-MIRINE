'use client';
import { useState } from "react";
import styles from "./reviewCommon.module.css";
import Image from "next/image";

export default function ReviewCommon(){
  const [active, setActive] = useState<"mirine"|"perfume"|"aroma">('mirine');
  const count = 123;
  
  return(
    <div className={styles.common_section}>
      <h2 className={styles.title}>리뷰</h2>

      <nav className={styles.btn_group}>
        <ul className={styles.category_list}>
          <li className={`${styles.category_btn} ${active === 'mirine' ? styles.active : ''}`} >
            <button 
              onClick={() => setActive('mirine')} 
            >
              미리내
            </button>
          </li>
          <li className={`${styles.category_btn} ${active === 'perfume' ? styles.active : ''}`}>
            <button 
              onClick={() => setActive('perfume')} 
            >
              향수
            </button>
          </li>
          <li className={`${styles.category_btn} ${active === 'aroma' ? styles.active : ''}`}>
            <button 
              onClick={() => setActive('aroma')} 
            >
              아로마슈터
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.count_icon_section}>
        <p className={styles.count}>총 {count}개</p>
        <div className={styles.icon_group}>
          <ul className={styles.view_options}>
            <li>
              <button className={styles.view_btn} type="button" aria-label="리스트 보기">
                <Image src="/icon/Icon-layout-list.svg" alt="리스트" width={18} height={14} />
              </button>
            </li>
            <li>
              <button className={styles.view_btn} type="button" aria-label="그리드 보기">
                <Image src="/icon/Icon-layout-grid.svg" alt="그리드" width={18} height={14} />  
              </button>
            </li>
          </ul>
        </div>
      </div>

      <section className={styles.tab_content}>
        {active === "mirine" && ('미리내 리뷰')}
        {active === "perfume" && ('향수 리뷰')}
        {active === "aroma" && ('아로마슈터 리뷰')}
      </section>
    </div>
  )
}