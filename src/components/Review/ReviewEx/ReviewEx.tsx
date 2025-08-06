"use client";

import { deleteReview } from "@/lib/action";
import { getAccessToken, sortLatest } from "@/lib/clientFunction";
import { getMyReivews } from "@/lib/function";
import Image from "next/image";
import Link from "next/link";
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
  };
  extra: {
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
export default function ReviewEx() {
  const token = getAccessToken();
  const crtURL = "/devtest/actiontest/reviewTest";
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(null);
  useEffect(() => {
    (async () => {
      const reviewData: ReviewItem[] = (await getMyReivews(getAccessToken())).item;
      reviewData.sort(sortLatest);
      console.log("reviewData", reviewData);
      setReviewList(reviewData);
    })();
  }, []);
  return (
    <ul style={{ padding: "12px", display: "flex", flexFlow: "column nowrap", gap: "12px" }}>
      {reviewList?.map((e) => {
        return (
          <li key={e._id} style={{ border: "1px solid black" }}>
            <p>리뷰아이디: {e._id}</p>
            <p>회원아이디: {e.user._id}</p>
            <p>회원이름: {e.user.name}</p>
            <p>제품아이디: {e.product._id}</p>
            <p>제품이름: {e.product.name}</p>
            <p>
              제품사진: <Image src={e.product.image.path} alt="alt" width={30} height={30} />
            </p>
            <p>리뷰내용: {e.content}</p>
            <p>생성일: {e.createdAt}</p>
            <p>평점: {e.rating}</p>
            <ul style={{ padding: "12px", display: "flex", flexFlow: "row nowrap", gap: "12px" }}>
              {Array.isArray(e.extra.images) &&
                e.extra?.images?.map((el) => {
                  if (typeof el === "string") {
                    return (
                      <li key={el}>
                        <Image src={el} alt="alt" width={30} height={30} />
                      </li>
                    );
                  }
                })}
            </ul>
            <div style={{ border: "2px solid black", display: "flex", gap: "12px", padding: "10px" }}>
              <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${e._id}`}>
                리뷰 상세 보기
              </Link>
              <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${e._id}/edit`}>
                리뷰 수정하기
              </Link>
              <button
                onClick={() => {
                  deleteReview(e._id, token);
                }}
                type="button"
                style={{ border: "1px solid black", padding: "2px" }}
              >
                리뷰 삭제하기
              </button>
            </div>
          </li>
        );
      })}
    </ul>
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
