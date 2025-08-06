"use client";
import { useEffect, useState } from "react";
import PerfumeEx, { PerfumeInfo } from "./PerfumeEx";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { getUsersLikes } from "@/lib/function";

export interface LikeListProductProp {
  _id: number;
  product: { _id: number };
}

export default function PerfumeList({ data }: { data: { ok: number; item: PerfumeInfo[] } }) {
  const [likeListtt, setLikeListtt] = useState<Array<{ productID: number; likeID: number }> | null>(null);
  const perfumeList = data.item;
  const userID = +getUserID();
  const token = getAccessToken();

  console.log("perfumeList", perfumeList);

  useEffect(() => {
    (async () => {
      const data = await getUsersLikes(userID);
      const idArray = data.item.product.map((likeProduct: LikeListProductProp) => {
        return { productID: likeProduct.product._id, likeID: likeProduct._id };
      });
      setLikeListtt(idArray);
      console.log("idArray", idArray);
    })();
  }, []);

  useEffect(() => {
    console.log(likeListtt);
  }, [likeListtt]);

  return (
    <>
      {likeListtt && (
        <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", padding: "4px" }}>
          {data.ok &&
            perfumeList.map((item) => (
              <li key={item._id} style={{ border: "1px solid black", padding: "4px" }}>
                <PerfumeEx item={item} isLike={likeListtt.find((e) => e.productID === item._id)} token={token} userID={userID} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
