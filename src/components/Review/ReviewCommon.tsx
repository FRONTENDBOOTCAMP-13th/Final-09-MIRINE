"use client";
import { useEffect, useState } from "react";
import List from "@/components/Review/List/List";
import styles from "./reviewCommon.module.css";
import ListGrid from "./ListGrid/ListGrid";
import Photo from "./Photo/Photo";
import { ReviewItem } from "@/types/review";
import { sortLatest } from "@/lib/clientFunction";

export default function ReviewCommon({ data }: { data: ReviewItem[] }) {
  const [active, setActive] = useState<"mirine" | "perfume" | "aroma">("perfume");
  const [listOrGrid, setListOrGrid] = useState<"list" | "grid">("grid");
  const [reviewListByType, setReviewListByType] = useState<{ mirine: ReviewItem[]; perfume: ReviewItem[]; aroma: ReviewItem[] }>({ mirine: [], perfume: [], aroma: [] });
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  const [init, setInit] = useState(true);

  useEffect(() => {
    const resultArray: { mirine: ReviewItem[]; perfume: ReviewItem[]; aroma: ReviewItem[] } = {
      mirine: [],
      perfume: [],
      aroma: [],
    };
    data.forEach((e) => {
      if (e.extra.type === "m") resultArray.mirine.push(e);
      else if (e.product._id < 12) resultArray.aroma.push(e);
      else resultArray.perfume.push(e);
    });
    resultArray.perfume.sort(sortLatest);
    resultArray.mirine.sort(sortLatest);
    resultArray.aroma.sort(sortLatest);
    setReviewListByType(resultArray);
    setReviewList(resultArray.perfume);
    console.log("reviewListByType", reviewListByType);
    setInit(false);
  }, [init]);

  useEffect(() => {
    console.log("reviewListByType", reviewListByType);
  }, [reviewListByType]);

  useEffect(() => {
    if (active === "mirine") setReviewList(reviewListByType.mirine);
    else if (active === "perfume") setReviewList(reviewListByType.perfume);
    else setReviewList(reviewListByType.aroma);
  }, [active]);

  const renderContent = () => {
    return <></>;
    // switch (active) {
    //   case "mirine":
    //     setReviewList(reviewListByType.mirine);
    //     return (
    //       <div className={styles.message}>
    //         <p>미리내 리뷰 준비중입니다.</p>
    //       </div>
    //     );
    //   case "perfume":
    //     setReviewList(reviewListByType.perfume);
    //     return <ReviewSample />;
    //   case "aroma":
    //     setReviewList(reviewListByType.aroma);
    //     return (
    //       <div className={styles.message}>
    //         <p>아로마슈터 리뷰 준비중입니다.</p>
    //       </div>
    //     );
    //   default:
    //     return null;
    // }
  };

  return (
    <>
      <div className={styles.common_section}>
        <nav className={styles.btn_group}>
          <ul className={styles.category_list}>
            <li className={`${styles.category_btn} ${active === "mirine" ? styles.active : ""}`}>
              <button onClick={() => setActive("mirine")}>미리내</button>
            </li>
            <li className={`${styles.category_btn} ${active === "perfume" ? styles.active : ""}`}>
              <button onClick={() => setActive("perfume")}>향수</button>
            </li>
            <li className={`${styles.category_btn} ${active === "aroma" ? styles.active : ""}`}>
              <button onClick={() => setActive("aroma")}>아로마슈터</button>
            </li>
          </ul>
        </nav>

        <section className={styles.tab_content}>
          {renderContent()}
          <ListGrid listOrGrid={listOrGrid} setListOrGrid={setListOrGrid} />
        </section>
      </div>
      {listOrGrid === "grid" ? <Photo data={reviewList} /> : <List data={reviewList} />}

      {/* <View /> */}
    </>
  );
}
// export default function ReviewCommon() {
//   return (
//     <div className={styles.common_section}>
//       <h2 className={styles.title}>리뷰</h2>

//       <nav className={styles.btn_group}>
//         <ul className={styles.category_list}>
//           <ReviewButton />
//         </ul>
//       </nav>
//     </div>
//   );
// }
