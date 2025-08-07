"use client";
import Image from "next/image";
import styles from "./perfumeItem.module.css";
import { useEffect, useState } from "react";
import { addPriceTemplate, getFile } from "@/lib/clientFunction";
import Link from "next/link";
import { Perfume } from "@/types/perfume";
import useMirineStore from "@/store/mirineStore";
import { deleteLike, postLike } from "@/lib/action";
export default function PerfumeItem({ id, item, path, inMirine, isLike, token, userID }: { id: number; item: Perfume; path: string; inMirine: boolean; isLike: { productID: number; likeID: number } | undefined; token: string; userID: number }) {
  const [isActive, setIsActive] = useState(isLike !== undefined);
  const [likeID, setLikeID] = useState<number | null>(isLike === undefined ? null : isLike.likeID);
  const mirine = useMirineStore((state) => state.mirine);
  const [isInMirine, setIsInMirine] = useState(mirine.findIndex((e) => e.id === id) !== -1);
  const addItem = useMirineStore((state) => state.addItem);
  const deleteItem = useMirineStore((state) => state.deleteItem);
  useEffect(() => {
    setIsInMirine(mirine.findIndex((e) => e.id === +id) !== -1);
  }, [mirine]);

  return (
    // <Link href={`/perfumes/${id}/#top`}> // 페이지 이동 시 맨 위로 안올라가짐
    <Link href={`/perfumes/${id}${inMirine ? "?prev=mirine" : ""}`}>
      <div className={styles.image_wrapper}>
        <Image src={getFile(path)} alt="향수 이미지" fill sizes="100%" className={styles.image}></Image>
        <button
          type="button"
          className={styles.like_btn}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isActive) {
              if (typeof likeID === "number") deleteLike({ target_id: likeID, token: token });
            } else {
              postLike({ user_id: userID, target_id: item._id, token: token }).then((res) => {
                setLikeID(+res.item._id);
              });
            }
            setIsActive(!isActive);
          }}
        >
          {isActive ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.751 3C16.042 3 17.8348 4.7849 17.835 7.08301C17.835 8.48946 17.2046 9.80915 15.9941 11.29C14.7782 12.7776 13.0295 14.3667 10.874 16.3213L10.873 16.3223L10.001 17.1152L9.12988 16.3223L9.12891 16.3213L7.58984 14.9199C6.13157 13.5786 4.91974 12.4057 4.00781 11.29C2.79741 9.80917 2.16797 8.48944 2.16797 7.08301C2.16814 4.78501 3.96012 3.00017 6.25098 3C7.54977 3 8.80521 3.60692 9.62207 4.55859L10.001 5.00098L10.3809 4.55859C11.1976 3.60709 12.4524 3.0001 13.751 3Z" fill="var(--primary-purple-200)" stroke="var(--primary-purple-300)" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.751 3C16.042 3 17.8348 4.7849 17.835 7.08301C17.835 8.48946 17.2046 9.80915 15.9941 11.29C14.7782 12.7776 13.0295 14.3667 10.874 16.3213L10.873 16.3223L10.001 17.1152L9.12988 16.3223L9.12891 16.3213L7.58984 14.9199C6.13157 13.5786 4.91974 12.4057 4.00781 11.29C2.79741 9.80917 2.16797 8.48944 2.16797 7.08301C2.16814 4.78501 3.96012 3.00017 6.25098 3C7.54977 3 8.80521 3.60692 9.62207 4.55859L10.001 5.00098L10.3809 4.55859C11.1976 3.60709 12.4524 3.0001 13.751 3Z" stroke="var(--black-300)" />
            </svg>
          )}
        </button>
        {/* 더하기버튼 */}
        {inMirine && (
          <button
            type="button"
            className={`${styles.plus_btn} ${isInMirine && styles.active}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (mirine.findIndex((e) => e.id === +id) === -1) {
                addItem({
                  id: +id,
                  name: item.name,
                  path: path,
                  price: item.price,
                });
                setIsInMirine(true);
              } else {
                alert("딜리트해야함");
                deleteItem({
                  id: +id,
                  name: item.name,
                  path: path,
                  price: item.price,
                });
                setIsInMirine(false);
              }
            }}
          >
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12.5H19M12 5.5V19.5" stroke="var(--bg-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
      <p className={styles.brand}>{item.extra.brand}</p>
      <p className={styles.name}>{item.name}</p>
      <p className={styles.price}>{addPriceTemplate(item.price)}</p>
    </Link>
  );
}
