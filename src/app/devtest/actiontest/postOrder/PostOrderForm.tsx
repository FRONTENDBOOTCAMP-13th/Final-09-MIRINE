"use client";
import { postOrder } from "@/lib/action";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { getAllOrders } from "@/lib/function";
import { useActionState, useEffect, useState } from "react";

export default function PostOrderForm() {
  const [crtState, formAction, isLoading] = useActionState(postOrder, null);
  console.log(isLoading, crtState);
  const token = getAccessToken();
  const userId = getUserID();
  useEffect(() => {
    if (crtState?.ok) console.log("crtState", crtState);
    else console.log("crtState", crtState);
    if (crtState?.ok) {
      const data = getAllOrders(token);
      console.log(data);
    }
  });
  const [price, setPrice] = useState(272710);

  return (
    <form action={formAction}>
      <input type="hidden" name="user_id" defaultValue={userId} />
      <input type="hidden" name="token" defaultValue={token} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(20px,140px))", rowGap: "10px" }}>
        <span>product_id: 1</span>
        <input type="checkbox" name="product_id" value={1} />
        <span>product_id: 2</span>
        <input type="checkbox" name="product_id" value={2} />
        <span>product_id: 3</span>
        <input type="checkbox" name="product_id" value={3} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(20px,140px))", rowGap: "10px", marginBlock: "10px" }}>
        <span>product_quantity: 5</span>
        <input type="checkbox" name="product_quantity" value={5} />
        <span>product_quantity: 7</span>
        <input type="checkbox" name="product_quantity" value={7} />
        <span>product_quantity: 1</span>
        <input type="checkbox" name="product_quantity" value={1} />
      </div>
      <span style={{ paddingRight: "40px" }}>총 가격</span>
      <input
        type="text"
        name="total"
        value={price}
        onChange={(e) => {
          setPrice(+e.target.value);
        }}
      />
      <br />
      <button type="submit" style={{ marginTop: "20px", border: "1px solid black" }}>
        제출
      </button>
    </form>
  );
}
