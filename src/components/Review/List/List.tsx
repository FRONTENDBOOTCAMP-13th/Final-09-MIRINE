import styles from "./list.module.css";
import Image from "next/image";
import NameDateTime from "@/components/Review/UserInfo/NameDateTime"
import Link from "next/link";

export default function RiviewList(){
  return(
  <div className={styles.list}>
    <Link href="/" className={styles.review_list}>
      {/* 유저 정보 */}
      <div className={styles.user_info}>
        <NameDateTime />
      </div>
      {/* 리뷰사진 */}
      <div className={styles.photo_group}>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
      </div>
      {/* 제품 정보 */}
      <div className={styles.item_info}>
        <p className={styles.brand_name}>브랜드</p>
        <p className={styles.product_name}>향수이름</p>
      </div>
      {/* 리뷰 텍스트 */}
      <div className={styles.text}>리뷰...더보기</div>
    </Link>

    <Link href="/" className={styles.review_list}>
      {/* 유저 정보 */}
      <div className={styles.user_info}>
        <NameDateTime />
      </div>
      {/* 리뷰사진 */}
      <div className={styles.photo_group}>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
      </div>
      {/* 제품 정보 */}
      <div className={styles.item_info}>
        <p className={styles.brand_name}>브랜드</p>
        <p className={styles.product_name}>향수이름</p>
      </div>
      {/* 리뷰 텍스트 */}
      <div className={styles.text}>리뷰...더보기</div>
    </Link>

  </div>
  
  )
}