"use client";
import { Perfume } from "@/types/perfume";
import PerfumeItem from "../PerfumeItem/PerfumeItem";
import styles from "./perfumeList.module.css";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { useEffect, useState } from "react";
import { getUsersLikes } from "@/lib/function";

export default function PerfumeList({ data, inMirine }: { data: { ok: number; item: Perfume[] }; inMirine: boolean }) {
  const [likeList, setLikeList] = useState<Array<{ productID: number; likeID: number }> | null>(null);
  const userID = +getUserID();
  const token = getAccessToken();
  useEffect(() => {
    (async () => {
      const data = await getUsersLikes(userID);
      const idArray = data.item.product.map((likeProduct: { _id: number; product: { _id: number } }) => {
        return { productID: likeProduct.product._id, likeID: likeProduct._id };
      });
      setLikeList(idArray);
      console.log("idArray", idArray);
    })();
  }, []);

  return (
    <>
      {likeList && (
        <ul className={styles.perfume_container}>
          {data.item.map((item: Perfume) => (
            <li key={item._id}>
              <PerfumeItem id={item._id} item={item} path={item.mainImages[0].path} inMirine={inMirine} isLike={likeList && likeList.find((e) => e.productID === item._id)} token={token} userID={userID} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
