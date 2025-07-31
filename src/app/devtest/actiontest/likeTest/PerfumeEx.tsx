"use client";

import { deleteLike, postLike } from "@/lib/action";
import { getFile } from "@/lib/clientFunction";
import { getAllLikes, getAllUsers, getUsersLikes } from "@/lib/function";
import Image from "next/image";
import { useState } from "react";

export interface PerfumeInfo {
  _id: number;
  name: string;
  extra: {
    brand: string;
    mainAccord: string;
    content: string;
    prices: number[];
    volumes: number[];
    tags: string[];
  };
  mainImages: Array<{ name: string; path: string; originalname: string }>;
}
export default function PerfumeEx({ item, isLike, token, userID }: { item: PerfumeInfo; isLike: { productID: number; likeID: number } | undefined; token: string; userID: number }) {
  const [isActive, setIsActive] = useState(isLike !== undefined);
  const [likeID, setLikeID] = useState<number | null>(isLike === undefined ? null : isLike.likeID);

  // deleteLike;
  return (
    <>
      <p>{item.extra.brand}</p>
      <p>{item.name}</p>
      <p>{item.extra.content}</p>
      <p>{item.extra.mainAccord}</p>
      <ul style={{ display: "flex", flexFlow: "row nowrap", gap: "6px" }}>
        {item.extra.prices.map((price) => (
          <li key={price} style={{ padding: "4px", border: "1px solid black", fontSize: "12px" }}>
            {price}
          </li>
        ))}
      </ul>
      <ul style={{ display: "flex", flexFlow: "row nowrap", gap: "6px" }}>
        {item.extra.volumes.map((volume) => (
          <li key={volume} style={{ padding: "4px", border: "1px solid black" }}>
            {volume}
          </li>
        ))}
      </ul>
      <ul style={{ display: "flex", flexFlow: "row nowrap", gap: "6px" }}>
        {item.extra.tags.map((tag) => (
          <li key={tag} style={{ border: "1px solid black", fontSize: "6px" }}>
            {tag}
          </li>
        ))}
      </ul>
      <Image src={getFile(item.mainImages[0].path)} alt="alt" width="100" height="100" />
      <button
        aria-label="찜하기"
        type="button"
        onClick={() => {
          if (isActive) {
            if (typeof likeID === "number") console.log(deleteLike({ target_id: likeID, token: token }));
          } else {
            postLike({ user_id: userID, target_id: item._id, token: token }).then((res) => {
              console.log("북마크 아이디", res.item._id);
              setLikeID(+res.item._id);
            });
          }
          const data = getAllLikes(token);
          console.log("getAllLikes", data);
          const data1 = getAllUsers();
          console.log("getAllUsers", data1);
          setIsActive(!isActive);
          const data2 = getUsersLikes(userID).then((result) => {
            console.log("getUsersLikes", result);
            console.log(
              "usersLikes",
              result.item.product.map((e) => e.product._id)
            );
          });
          console.log("getUsersLikes", data2);
          console.log("isActive", isActive);
        }}
      >
        {isActive ? (
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" fill="#EFE7FF" stroke="#B090EE" />
          </svg>
        ) : (
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" stroke="#C2C2C2" />
          </svg>
        )}
      </button>
    </>
  );
}
