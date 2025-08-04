"use client";
import { getAccessToken, getFile } from "@/lib/clientFunction";
import { getOrder, getProduct } from "@/lib/function";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewFormEx from "./ReviewFormEx";
export interface Product {
  _id: number;
  quantity: number;
  volume: number;
  price: number;
  image: { path: string };
}

export default function NewReviewContainerEx({ id }: { id: string }) {
  const token = getAccessToken();
  // 0: 실패 / 1: 성공 / 2: 로딩중
  const [isLoading, setIsLoading] = useState<0 | 1 | 2>(2);
  const [productList, setProductList] = useState<Product[] | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const orderRes = await getOrder(token, +id);
        const orderData = orderRes.item.products;
        const orderDataWithPath = await Promise.all(
          orderData.map(async (e: { _id: number; image?: { path: string } }) => {
            if (e.image === undefined) {
              const path = (await getProduct(e._id)).item.mainImages[0].path;
              e.image = { path: "" };
              e.image.path = path;
            }
            return e;
          })
        );
        setProductList(orderDataWithPath);
        setIsLoading(1);
      } catch (e) {
        console.error(e);
        setIsLoading(0);
      }
    })();
  }, []);
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
          <ul style={{ border: "1px solid black", margin: "12px", padding: "12px", borderRadius: "12px", display: "flex", flexFlow: "column nowrap", gap: "12px" }}>
            {productList?.map((e) => (
              <li key={e._id} style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-between" }}>
                <p>{e._id}</p>
                <p>{e.quantity}</p>
                <p>{e.volume}</p>
                <p>{e.price}</p>
                <Image src={getFile(e.image.path)} alt="alt" width={50} height={50} style={{ aspectRatio: "1/1" }} />
              </li>
            ))}
          </ul>
          {productList && <ReviewFormEx data={productList[0]} orderId={id} productIds={productList.map((e) => e._id)} />}
        </div>
      )}
    </>
  );
}
