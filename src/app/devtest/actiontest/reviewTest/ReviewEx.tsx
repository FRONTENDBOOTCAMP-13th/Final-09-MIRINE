"use client";

import { getFile } from "@/lib/clientFunction";
import { getProduct } from "@/lib/function";
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
export default function ReviewEx({ data }: { data: ReviewItem }) {
  const crtURL = "/devtest/actiontest/reviewTest";
  const [target, setTarget] = useState<ProductitemEx | null>(null);
  useEffect(() => {
    (async () => {
      const getproduct = await getProduct(data.product._id);
      setTarget(getproduct);
    })();
  }, []);
  useEffect(() => {
    console.log("data", data);
    console.log("target", target);
  }, [target]);
  return (
    <>
      <div style={{ border: "1px solid black", padding: "12px" }}>
        {/* 유저 정보 */}
        <div>
          <div>
            <p>{data.user.name}</p>
            <p>{data.createdAt}</p>
          </div>
          {/* 임의로 별점 표시 */}
          <div>별점: {data.rating}</div>
        </div>
        {/* 리뷰사진 */}
        <div>
          <ul style={{ display: "flex" }}>
            {data.extra.images.map((path) => (
              <li key={path} style={{ display: "content" }}>
                <Image src={path} alt="리뷰 사진" width={52} height={52} />
              </li>
            ))}
          </ul>
        </div>
        {/* 제품 정보 */}
        <div>
          <p>{target?.item.extra.brand}</p>
          <p>{target?.item.name}</p>
        </div>
        {/* 리뷰 텍스트 */}
        <div>{data.content}</div>
        <div style={{ border: "2px solid black", display: "flex", gap: "12px", padding: "10px" }}>
          <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${data._id}`}>
            리뷰 상세 보기
          </Link>
          <Link style={{ border: "1px solid black", padding: "2px" }} href={`${crtURL}/${data._id}/edit`}>
            리뷰 수정하기
          </Link>
          <button type="button" style={{ border: "1px solid black", padding: "2px" }}>
            리뷰 삭제하기
          </button>
        </div>
      </div>
    </>
  );
}
