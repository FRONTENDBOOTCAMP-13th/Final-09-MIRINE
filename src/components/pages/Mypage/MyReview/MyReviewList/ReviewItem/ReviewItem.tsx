import DeleteBtn from "@/components/pages/Mypage/MyReview/Buttons/DeleteBtn";
import DetailBtn from "@/components/pages/Mypage/MyReview/Buttons/DetailBtn";
import EditBtn from "@/components/pages/Mypage/MyReview/Buttons/EditBtn";
import styles from "@/components/pages/Mypage/MyReview/MyReviewList/ReviewItem/reviewItem.module.css";
import { ratingToStar } from "@/lib/clientFunction";
import { ReviewItem } from "@/types/review";
import Image from "next/image";

export default function MyReviewItem({ data }: { data: ReviewItem }) {
  return (
    <li className={styles.list_item}>
      <div className={styles.info_group}>
        <div className={styles.info}>
          <p className={styles.datetime}>{data.createdAt}</p>
          <p className={styles.star}>{ratingToStar(data.rating)}</p>
        </div>

        {/* 리뷰사진 */}
        <ul className={styles.photo_list}>
          {data.extra.images.map((e) => (
            <li key={e}>
              <Image src={e} alt="리뷰 사진" width={52} height={52} className={styles.imgage} />
            </li>
          ))}
          {/* <li>
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
          <li></li> */}
        </ul>

        <div className={styles.item_group}>
          <div className={styles.item_info}>
            <p className={styles.brand_name}>{data.extra.brand}</p>
            <p className={styles.product_name}>{data.product.name}</p>
          </div>

          <div className={styles.text}>
            {data.content}
            {data.content.length > 200 && <span className={styles.more_view}>...더보기</span>}
          </div>
        </div>
      </div>

      <div className={styles.btn_wrap}>
        <DetailBtn reviewID={data._id} />
        <EditBtn reviewID={data._id} />
        <DeleteBtn reviewID={data._id} />
      </div>
    </li>
  );
}
