import DeleteBtn from "@/components/pages/Mypage/MyReview/Buttons/DeleteBtn";
import DetailBtn from "@/components/pages/Mypage/MyReview/Buttons/DetailBtn";
import EditBtn from "@/components/pages/Mypage/MyReview/Buttons/EditBtn";
import styles from "@/components/pages/Mypage/MyReview/MyReviewList/ReviewItem/reviewItem.module.css";
import Image from "next/image";

export default function MyReviewItem() {
  return (
    <li className={styles.list_item}>
      <div className={styles.info_group}>
        <div className={styles.info}>
          <p className={styles.datetime}>2025.07.10 16:38:01</p>
          <p className={styles.star}>★★★☆☆</p>
        </div>

        {/* 리뷰사진 */}
        <ul className={styles.photo_list}>
          <li>
            <Image src="/image/perfume-test.webp" alt="리뷰 사진" width={52} height={52} className={styles.imgage} />
          </li>
          <li>
            <Image src="/image/perfume-test.webp" alt="리뷰 사진" width={52} height={52} className={styles.imgage} />
          </li>
          <li>
            <Image src="/image/perfume-test.webp" alt="리뷰 사진" width={52} height={52} className={styles.imgage} />
          </li>
          <li>
            <Image src="/image/perfume-test.webp" alt="리뷰 사진" width={52} height={52} className={styles.imgage} />
          </li>
          <li></li>
        </ul>

        <div className={styles.item_group}>
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름</p>
          </div>

          <div className={styles.text}>
            리뷰<span className={styles.more_view}>...더보기</span>
          </div>
        </div>
      </div>

      <div className={styles.btn_wrap}>
        <DetailBtn />
        <EditBtn />
        <DeleteBtn />
      </div>
    </li>
  );
}
