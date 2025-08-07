"use client";

import ReviewWriteBtn from "@/components/pages/Mypage/MyReview/Buttons/ReviewWriteBtn";
import styles from "@/components/pages/Mypage/MyReview/MyReviewWriteList/myReviewWriteList.module.css";
import { addml, getAccessToken, sortLatest } from "@/lib/clientFunction";
import { getAllOrders } from "@/lib/function";
import { OrderItem } from "@/types/order";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MyReviewWriteList() {
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
    <div className={styles.wrap}>
      <p className={styles.title}>리뷰 쓰기</p>

      {/* 리뷰쓰기 리스트 */}
      <ul className={styles.list}>
        {orderList?.map((e, i) => {
          if (e.review_id === 0) {
            if (e.history === undefined || e.history?.updated?.review_id === 0) {
              return (
                <li key={e._id} className={styles.list_item}>
                  <Image src={e.extra.type === "p" ? (e.extra.products as { id: number; name: string; path: string; price: number }[])[0].path : (e.products[0].image as { path: string }).path} alt="향수 이미지" width={40} height={40} className={styles.item_img} />
                  <div className={styles.item_info}>
                    <p className={styles.date}>{e.createdAt}</p>
                    <p className={styles.brand_name}>{e.extra.type === "p" ? e.products[0].extra.brand : "미리내"}</p>
                    <p className={styles.product_name}>{e.extra.type === "p" ? (e.extra.products as { id: number; name: string; path: string; price: number }[])[0].name + addml(e.extra.volume as number) : (e.extra.products as { id: number; name: string; path: string; price: number }[]).reduce((sum, item, i) => sum + item.name + (i !== (e.extra.products as { id: number; name: string; path: string; price: number }[]).length - 1 ? " / " : ""), "")}</p>
                  </div>

                  {/* 리뷰쓰기 버튼 */}
                  <ReviewWriteBtn orderID={e._id} />
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
}
