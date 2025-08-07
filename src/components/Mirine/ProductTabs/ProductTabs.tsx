"use client";
import { useEffect, useState } from "react";
import styles from "./productTabs.module.css";
import Image from "next/image";
import RiviewList from "@/components/Review/List/List";
import { getProductsReivews } from "@/lib/function";
import { averageRating } from "@/lib/clientFunction";
import { ReviewItem } from "@/types/review";

export interface ProductTabsProp {
  id: number;
  detailContent: string;
}
export default function ProductTabs({ data }: { data: ProductTabsProp }) {
  const [activeTab, setActiveTab] = useState<"description" | "review">("description");
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  const [reviewCount, setReviewCount] = useState(0);
  const [ratingAvg, setRatingAvg] = useState("0.00");
  useEffect(() => {
    const ratingArr = new Array<number>();
    (async () => {
      const res = await getProductsReivews(data.id);
      setReviewList(res.item);
      setReviewCount(res.item.length);
      res.item.forEach((e: { rating: number }) => ratingArr.push(e.rating));
      console.log(averageRating(ratingArr));
      setRatingAvg(averageRating(ratingArr));
    })();
  }, []);
  return (
    <div>
      <nav className={styles.tab_nav}>
        <ul className={styles.tab_list}>
          <li className={`${styles.tab_btn} ${activeTab === "description" ? styles.active : ""}`}>
            <button onClick={() => setActiveTab("description")}>상품설명</button>
          </li>
          <li className={`${styles.tab_btn} ${activeTab === "review" ? styles.active : ""}`}>
            <button onClick={() => setActiveTab("review")}>
              리뷰
              <span className={styles.reviewCount}>({reviewCount})</span>
              {/* 별 아이콘으로 바꿔야 함 */}
              <span className={styles.review_star}>{ratingAvg}</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className={styles.tab_content}>
        {activeTab === "description" && (
          <div className={styles.detail_page}>
            <Image src={data.detailContent} alt="상세페이지" width={360} height={2421} />
          </div>
        )}
        {activeTab === "review" && (
          <div className={styles.review_list}>
            {/* 여기로 review 데이터 보내야 함 */}
            <RiviewList data={reviewList} />
          </div>
        )}
      </section>
    </div>
  );
}
