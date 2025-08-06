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
    brand: string;
    image: {
      path: string;
    };
    // extra?: {
    //   brand?: string;
    // }
  };
  extra: {
    // brand: string;
    images: string[];
  };
}
export interface ProductitemEx {
  item: {
    name: string;
    extra: {
      brand: string;
    };
  };
}
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
                <p className={styles.rating}>평점:{e.rating}</p>
              </div>
              {/* <p className={styles.review}>제품아이디: {e.product._id}</p> */}
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
                <p className={styles.brand_name}></p>
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
// export default function ReviewEx({ data }: { data: ReviewItem }) {
//   const crtURL = "/devtest/actiontest/reviewTest";
//   const [target, setTarget] = useState<ProductitemEx | null>(null);
//   useEffect(() => {
//     (async () => {
//       const getproduct = await getProduct(data.product._id);
//       setTarget(getproduct);
//     })();
//   }, []);
//   useEffect(() => {
//     console.log("data", data);
//     console.log("target", target);
//   }, [target]);
//   return (
//     <>
//       <div style={{ border: "1px solid black", padding: "12px" }}>
//         {/* 유저 정보 */}
//         <div>
//           <div>
//             <p>{data.user.name}</p>
//             <p>{data.createdAt}</p>
//           </div>
//           {/* 임의로 별점 표시 */}
//           <div>별점: {data.rating}</div>
//         </div>
//         {/* 리뷰사진 */}
//         <div>
//           <ul style={{ display: "flex" }}>
//             {data.extra.images.map((path) => (
//               <li key={path} style={{ display: "content" }}>
//                 <Image src={path} alt="리뷰 사진" width={52} height={52} />
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* 제품 정보 */}
//         <div>
//           <p>{target?.item.extra.brand}</p>
//           <p>{target?.item.name}</p>
//         </div>
//         {/* 리뷰 텍스트 */}
//         <div>{data.content}</div>
//         <div style={{ border: "2px solid black", display: "flex", gap: "12px", padding: "10px" }}>
//           <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${data._id}`}>
//             리뷰 상세 보기
//           </Link>
//           <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${data._id}/edit`}>
//             리뷰 수정하기
//           </Link>
//           <button type="button" style={{ border: "1px solid black", padding: "2px" }}>
//             리뷰 삭제하기
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
