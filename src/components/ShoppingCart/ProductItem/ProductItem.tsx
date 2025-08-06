// 상품 아이템
"use client";
import Image from "next/image";
import styles from "./productItem.module.css";
import { CartItemInStore } from "@/types/shoppingCart";
import { useEffect, useState } from "react";
import { getProduct } from "@/lib/function";
import { addml, addPriceTemplate } from "@/lib/clientFunction";
import useShoppingCartStore from "@/store/shoppingCartStore";
import { MirineItemInState } from "@/store/mirineStore";

export default function ProductItem({ data, isChecked, checkedArrayHandle }: { data: CartItemInStore; isChecked: boolean; checkedArrayHandle: () => void }) {
  const increaseItemQuantity = useShoppingCartStore((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useShoppingCartStore((state) => state.decreaseItemQuantity);
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [path, setPath] = useState("/");
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(0);
  useEffect(() => {
    if (data.type === "p") {
      (async () => {
        const product = await getProduct(+data.content[0]);
        console.log(product);
        setBrand(product.item.extra.brand);
        setPath(product.item.mainImages[0].path);
        setQuantity((data.content as [number, string, number, number, number])[3]);
        setTotal((data.content as [number, string, number, number, number])[3] * (data.content as [number, string, number, number, number])[4]);
        setName((data.content as [number, string, number, number, number])[1]);
        setVolume((data.content as [number, string, number, number, number])[2]);
      })();
    } else if (data.type === "m") {
      (async () => {
        const product = await getProduct(1);
        console.log(product);
        setBrand("미리내");
        setPath(product.item.mainImages[0].path);
        setQuantity(1);
        let nameStr = "";
        (data.content as MirineItemInState[]).forEach((e, i) => {
          nameStr += e.name;
          if (i !== (data.content as MirineItemInState[]).length - 1) nameStr += " / ";
        });
        setName(nameStr);
        const totalPerfume = (data.content as MirineItemInState[]).reduce((sum, e) => sum + e.price / 10, 0);
        console.log(`totalPerfume`, totalPerfume);
        setTotal(totalPerfume);
      })();
    }
  }, []);
  useEffect(() => {
    setTotal((data.content as [number, string, number, number, number])[3] * (data.content as [number, string, number, number, number])[4]);
  }, [quantity]);
  return (
    <li className={styles.cart_item}>
      <label htmlFor="item_select">
        <input
          id="item_select"
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            checkedArrayHandle();
          }}
          className={styles.checkbox}
        />
      </label>

      <Image src={path} alt="향수 이미지" width={40} height={40} className={styles.item_img} />
      <div className={styles.item_info}>
        <div className={styles.name}>
          <div className={styles.brand_name}>{brand}</div>
          <div className={styles.product_name}>
            {name}
            {data.type !== "m" && `/ ${addml(volume)}`}
          </div>
        </div>

        <div className={styles.count_control}>
          {data.type !== "m" && (
            <div className={styles.btn_count}>
              <button
                type="button"
                className={styles.btn_minus}
                onClick={() => {
                  if (quantity > 1) {
                    decreaseItemQuantity(data);
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <Image src="/icon/Icon-minus.svg" alt="감소" width={11} height={11} />
              </button>
              <span className={styles.count}>{quantity}</span>
              <button
                type="button"
                className={styles.btn_plus}
                onClick={() => {
                  increaseItemQuantity(data);
                  setQuantity(quantity + 1);
                }}
              >
                <Image src="/icon/Icon-plus.svg" alt="증가" width={11} height={11} />
              </button>
            </div>
          )}

          <div className={styles.product_price}>{addPriceTemplate(total)}</div>
        </div>
      </div>
    </li>
  );
}
