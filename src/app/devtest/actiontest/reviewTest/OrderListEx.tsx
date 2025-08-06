"use client";

import { getAccessToken, sortLatest } from "@/lib/clientFunction";
import { getAllOrders } from "@/lib/function";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export interface OrderItem {
  _id: number;
  user_id: number;
  user: {
    _id: number;
    name: string;
  };
  products: Product[];
  cost: { total: number };
  createdAt: string;
  review_id: number;
  history?: {
    updated: { review_id: number };
  };
}
export interface ReviewItem {
  _id: number;
  user: {
    _id: number;
    name: string;
  };
  product: {
    _id: number;
    image: { name: string; path: string };
    name: string;
  };
  content: string;
  createdAt: string;
  rating: number;
  extra: { images: string[] };
}
export interface Product {
  _id: number;
  quantity: number;
  volume: number;
  price: number;
}

export default function OrderListEx() {
  const pathname = usePathname();
  const [orderList, setOrderList] = useState<OrderItem[] | null>(null);
  useEffect(() => {
    (async () => {
      const orderData: OrderItem[] = (await getAllOrders(getAccessToken())).item;
      orderData.sort(sortLatest);
      console.log("orderData", orderData);
      setOrderList(orderData);
    })();
  }, []);
  return (
    <>
      <ul style={{ padding: "12px", display: "flex", flexFlow: "column nowrap", gap: "12px" }}>
        {orderList?.map((e) => {
          if (e.review_id === 0) {
            if (e.history === undefined || e.history?.updated?.review_id === 0) {
              return (
                <li key={e._id} style={{ border: "1px solid black" }}>
                  <p>주문내역아이디: {e._id}</p>
                  <p>회원아이디: {e.user_id}</p>
                  <p>회원이름: {e.user.name}</p>
                  <p>총 가격: {e.cost.total}</p>
                  <p>생성일: {e.createdAt}</p>
                  <p>리뷰아이디: {e.review_id}</p>
                  <ul style={{ padding: "12px", display: "flex", flexFlow: "column nowrap", gap: "12px" }}>
                    {e.products.map((el) => (
                      <li key={el._id} style={{ border: "1px solid black" }}>
                        <p>상품아이디: {el._id}</p>
                        <p>상품개수: {el.quantity}</p>
                        <p>상품용량: {el.volume}</p>
                        <p>상품가격: {el.price}</p>
                      </li>
                    ))}
                  </ul>
                  <Link style={{ border: "1px solid black", padding: "2px" }} href={`${pathname}/new/${e._id}`}>
                    리뷰작성
                  </Link>
                </li>
              );
            }
          }
        })}
      </ul>
    </>
  );
}
// export interface ReviewItem {
//   _id: number;
//   user: {
//     _id: number;
//     name: string;
//   };
//   product: {
//     _id: number;
//     image: { name: string; path: string };
//     name: string;
//   };
//   content: string;
//   createdAt: string;
//   rating: number;
//   extra: { images: string[] };
// }
// export interface OrderItem {
//   _id: number;
//   user_id: number;
//   products: Product[];
//   cost: { total: number };
//   createdAt: string;
//   review_id?: number;
// }
// export interface Product {
//   _id: number;
//   quantity: number;
//   volume: number;
//   price: number;
// }
