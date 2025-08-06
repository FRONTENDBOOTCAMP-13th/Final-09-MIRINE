"use client";

import { postReview } from "@/lib/action";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { getAllOrders, getAllReivews } from "@/lib/function";
import { useActionState, useEffect, useState } from "react";
import { Product } from "./NewReviewContainerEx";

export default function ReviewFormEx({ data, orderId, productIds, ratingData, contentData }: { data: Product; orderId: string; productIds: number[]; ratingData?: string; contentData?: string }) {
  const [rating, setRating] = useState(ratingData || "");
  const [content, setContent] = useState(contentData || "");
  const [crtState, formAction, isLoading] = useActionState(postReview, null);
  console.log(crtState, isLoading);
  const token = getAccessToken();
  const userId = getUserID();
  useEffect(() => {
    if (crtState?.ok) console.log("crtState", crtState, "1");
    else console.log("crtState", crtState, "2");
    if (crtState?.ok) {
      const data = getAllReivews();
      const data1 = getAllOrders(token);
      console.log("getAllReivews", data);
      console.log("getAllOrders", data1);
    }
  });
  return (
    <form action={formAction} style={{ display: "flex", flexFlow: "column nowrap" }}>
      <input type="hidden" name="user_id" defaultValue={userId} />
      <input type="hidden" name="token" defaultValue={token} />
      <input type="hidden" name="order_id" defaultValue={orderId} />
      {/* 제품 한 개밖에 못함 나중에 수정예정 */}
      <input type="hidden" name="product_id" defaultValue={productIds[0]} />
      <input type="hidden" name="quantity" defaultValue={data.quantity} />
      <input type="hidden" name="volume" defaultValue={data.volume} />
      <input type="hidden" name="price" defaultValue={data.price} />
      <div style={{ display: "flex", flexFlow: "column nowrap", margin: "12px", padding: "12px", border: "1px solid black", borderRadius: "12px", gap: "12px" }}>
        <label style={{ borderBottom: "1px solid black" }}>
          별점
          <input
            onChange={(e) => {
              setRating(e.target.value);
            }}
            value={rating}
            style={{ border: "1px solid black" }}
            type="text"
            name="rating"
          />
        </label>
        <input style={{ borderBottom: "1px solid black" }} type="file" name="uploadImages" multiple />
        <label style={{ borderBottom: "1px solid black" }}>
          리뷰 작성
          <input
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
            style={{ border: "1px solid black" }}
            type="text"
            name="content"
          />
        </label>
      </div>
      <button type="submit" style={{ border: "1px solid black", margin: "12px", color: "white", backgroundColor: "black" }}>
        저장
      </button>
    </form>
  );
}
