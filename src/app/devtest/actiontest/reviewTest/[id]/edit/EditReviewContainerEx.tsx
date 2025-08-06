"use client";
import { getFile } from "@/lib/clientFunction";
import { getProduct, getReivew } from "@/lib/function";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewFormEx from "../../new/[id]/ReviewFormEx";
import { Review } from "../ReviewInfoEx";
export interface Product {
  _id: number;
  quantity: number;
  volume: number;
  price: number;
  image: { path: string };
}

export default function EditReviewContainerEx({ id }: { id: string }) {
  // const token = getAccessToken();
  // 0: 실패 / 1: 성공 / 2: 로딩중
  const [isLoading, setIsLoading] = useState<0 | 1 | 2>(2);
  const [reviewData, setReviewData] = useState<Review | null>(null);
  const [productImagePath, setProductImagePath] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const reviewRes = (await getReivew(+id)).item[0];
        console.log("reviewRes", reviewRes);
        setReviewData(reviewRes);

        setIsLoading(1);
      } catch (e) {
        console.error(e);
        setIsLoading(0);
      }
    })();
  }, []);
  useEffect(() => {
    if (reviewData) {
      (async () => {
        console.log("reviewData", reviewData);
        const imagePathRes = (await getProduct(reviewData!.product._id)).item.mainImages[0].path;
        setProductImagePath(imagePathRes);
      })();
    }
  }, [reviewData]);
  return (
    <>
      {isLoading === 2 ? (
        <div>
          <p>로딩중</p>
        </div>
      ) : isLoading === 0 ? (
        <div>
          <p>접근권한없음</p>
        </div>
      ) : (
        <div>
          <p>{reviewData?.product._id}</p>
          <p>{reviewData?.extra.quantity}</p>
          <p>{reviewData?.extra.volume}</p>
          <p>{reviewData?.extra.price}</p>
          {reviewData?.extra.images.map((e) => (
            <Image key={e} src={getFile(e)} alt="alt" width={50} height={50} style={{ aspectRatio: "1/1" }} />
          ))}
          {reviewData && (
            <ReviewFormEx
              data={{
                _id: reviewData.product._id,
                quantity: reviewData.extra.quantity,
                volume: reviewData.extra.volume,
                price: reviewData.extra.quantity,
                image: { path: productImagePath },
              }}
              orderId={id}
              productIds={[reviewData.product._id, 0]}
              ratingData={reviewData?.rating?.toString() || ""}
              contentData={reviewData?.content?.toString() || ""}
            />
          )}
        </div>
      )}
    </>
  );
}
