"use client";
import { sortLatest } from "@/lib/clientFunction";
import { getMyReivews } from "@/lib/function";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Review/List/list.module.css";
import { useEffect, useState } from "react";
export interface ReviewItem {
  _id: number;
  user: { _id: number; name: string };
  rating: number;
  content: string;
  createdAt: string;
  product: {
    _id: number;
    name: string;
    image: {
      path: string;
    };
    extra: {
      brand: string;
    };
  };
  extra: {
    images: string[];
  };
}
// export interface ProductitemEx {
//   item: {
//     name: string;
//     extra: {
//       brand: string;
//     };
//   };
// }
export default function ReviewSample() {
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  const [token, setToken] = useState<string>('')

  useEffect(()=>{
    const accessToken = localStorage.getItem('accessToken') || '';
    setToken(accessToken);
  }, []);

  useEffect(() => {
    if (!token) return; 
    (async () => {
      try {
        const reviewData: ReviewItem[] = (await getMyReivews(token)).item;
        reviewData.sort(sortLatest);
        console.log("reviewData", reviewData);
        setReviewList(reviewData);
      } catch (error) {
        console.error("리뷰 데이터 가져오기 실패:", error);
      }
    })();
  }, [token]);
  
  return (
    <>
      <div>
        <div className={styles.count_text}>
          총 {reviewList?.length || 0}개
        </div>
      </div>
      <ul>
      {reviewList?.map((e) => {
        return (
          <li key={e._id} className={styles.reviewlist}>
            <Link href={`/devtest/actiontest/reviewTest/${e._id}`} >
            <div className={styles.review}>
              <div className={styles.info_wrapper}>
                <p className={styles.user_name}>{e.user.name}</p>
                <p className={styles.date}>{e.createdAt}</p>
                <p className={styles.rating}>{e.rating}</p>
              </div>
              <ul className={styles.review_img}>
                {Array.isArray(e.extra.images) &&
                  e.extra?.images?.map((el) => {
                    if (typeof el === "string") {
                      return (
                        <li key={el}>
                          <Image src={el} alt="리뷰 이미지" width={52} height={52} className={styles.img} />
                        </li>
                      );
                    }
                  })}
              </ul>
              <div className={styles.text_wrapper}>
                <p className={styles.brand_name}>브랜드</p>
                <p className={styles.product_name}>{e.product.name}</p>
                <p className={styles.review_text}>{e.content}</p>
              </div>
              
            </div>
            </Link>
          </li>
        );
      })}
    </ul>
    </>
    
  );
}
// export default function RiviewList(){
//   return(
//   <div className={styles.list}>
//     <Link href="/" className={styles.review_list}>
//       <div className={styles.user_info}>
//         <NameDateTime />
//       </div>
//       <div className={styles.photo_group}>
//         <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
//         <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
//         <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
//         <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
//         <Image src="/image/perfume1.svg" alt="리뷰 사진" width={52} height={52} className={styles.img} />
//       </div>
//       <div className={styles.item_info}>
//         <p className={styles.brand_name}>브랜드</p>
//         <p className={styles.product_name}>향수이름</p>
//       </div>
//       <div className={styles.text}>리뷰...더보기</div>
//     </Link>

//   </div>
  
//   )
// }