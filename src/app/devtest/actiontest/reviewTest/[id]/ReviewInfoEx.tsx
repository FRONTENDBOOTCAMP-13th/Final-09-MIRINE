"use client";

import { getProduct } from "@/lib/function";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface Review {
  _id: number;
  content: string;
  createdAt: string;
  rating: number;
  user: {
    _id: number;
    name: string;
  };
  product: {
    _id: number;
    name: string;
  };
  extra: {
    images: string[];
    price: number;
    quantity: number;
    volume: number;
  };
}

export default function ReviewInfoEx({ id, data }: { id: number; data: Review }) {
  const [brand, setBrand] = useState<string>("");
  useEffect(() => {
    (async () => {
      const productRes = (await getProduct(id)).item;
      setBrand(productRes.extra.brand);
    })();
  }, []);
  return (
    <>
      {data && (
        <div>
          {data.extra.images.map((e, i) => (
            <Image key={i} src={e} alt="alt" width={200} height={200} />
          ))}
          <p>작성자이름: {data.user.name}</p>
          <p>생성일: {data.createdAt}</p>
          <p>평점: {data.rating}</p>
          <p>브랜드: {brand}</p>
          <p>향수 이름: {data.product.name}</p>
          <p>향수 용량: {data.extra.volume}</p>
          <p>리뷰 내용: {data.content}</p>
        </div>
      )}
    </>
  );
}
