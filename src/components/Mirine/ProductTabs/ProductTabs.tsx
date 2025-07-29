'use client';
import { useState } from "react";
import styles from "./productTabs.module.css";
import Image from "next/image";
import RiviewList from "@/components/Review/List/List";

export default function ProductTabs(){
  const [activeTab, setActiveTab] = useState<"description" | "review">("description");
  const reviewCount = 100;

  return(
    <div>
      <nav className={styles.tab_nav}>
        <ul className={styles.tab_list}>
          <li className={`${styles.tab_btn} ${activeTab === "description" ? styles.active : ""}`}>
            <button onClick={()=>setActiveTab("description")}>
              상품설명
            </button>
          </li>
          <li className={`${styles.tab_btn} ${activeTab === "review" ? styles.active : ""}`}>
            <button onClick={()=>setActiveTab("review")}>
              리뷰
              <span className={styles.reviewCount}>({reviewCount})</span> 
              <span className={styles.review_star}>별점</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className={styles.tab_content} >
        {activeTab === "description" && (<div className={styles.detail_page}>
          <Image src="/image/detail-page.svg" alt="상세페이지" width={360} height={2421}/>
          </div>
        )}
        {activeTab === "review" && <div className={styles.review_list}><RiviewList /></div>}
      </section>
    </div>
  )
}