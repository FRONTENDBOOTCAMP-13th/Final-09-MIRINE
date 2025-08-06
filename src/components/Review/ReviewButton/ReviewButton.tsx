'use client';
import { useEffect, useState } from "react";
import styles from "./reviewButton.module.css";
import ReviewEx from "@/app/devtest/actiontest/reviewTest/ReviewEx";


export default function ReviewButton(){
  const [active, setActive] = useState<"mirine"|"perfume"|"aroma">('perfume');
  const [userId, setUserId] = useState('');

  useEffect(()=>{
    const id = localStorage.getItem('userId') || '';
    setUserId(id);
  }, []);

  return(
    <div className={styles.common_section}>
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

      <section className={styles.tab_content}>
        {active === "mirine" && ('미리내 리뷰 준비중입니다.')}
        {active === "perfume" &&  <ReviewEx />}
        {active === "aroma" && ('아로마슈터 리뷰 준비중입니다.')}
      </section>
    </div>
  )
}