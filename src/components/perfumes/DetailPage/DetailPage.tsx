"use client";
import MirineButton from "@/components/Mirine/Button/MirineButton";
import styles from "./detailPage.module.css";
import ProductHeader from "@/components/Mirine/ProductHeader/ProductHeader";
import ProductInfo from "@/components/Mirine/ProductInfo/ProductInfo";
import ProductTabs from "@/components/Mirine/ProductTabs/ProductTabs";
import BuyButton from "@/components/perfumes/BuyButton/BuyButton";
import BottomSheet from "@/components/perfumes/DetailPage/BottomSheet/BottomSheet";
import { Perfume } from "@/types/perfume";
import { useState } from "react";
import useMirineStore from "@/store/mirineStore";
import { useRouter } from "next/navigation";

export default function PerfumeDetailPage({ id, data, isMirine }: { id: string; data: Perfume; isMirine: boolean }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const router = useRouter();
  const addItem = useMirineStore((state) => state.addItem);
  const getMirine = useMirineStore((state) => state.getMirine);
  console.log(isMirine);
  return (
    <article className={styles.product_detail}>
      {/* 이미지, 찜, 링크 공유 */}
      <ProductHeader
        path={data.mainImages![0].path}
        data={{
          id: data._id,
        }}
      />
      {/* 제품 정보 */}
      <ProductInfo
        data={{
          brand: data.extra.brand,
          name: data.name,
          price: data.price,
          content: data.extra.content,
          tags: data.extra.tags,
        }}
      />
      <div className={styles.line}></div>
      {/* 탭 */}
      <ProductTabs
        data={{
          id: data._id,
          detailContent: data.extra.detailContent,
        }}
      />
      {/* 구매하기 버튼 */}
      {isMirine ? (
        <MirineButton
          handleAddToCart={() => {
            if (getMirine().findIndex((e) => e.id === +id) === -1) {
              addItem({
                id: +id,
                name: data.name,
                path: data.mainImages![0].path,
                price: data.price,
              });
              alert("미리내에 추가!");
            } else alert("이미 있음");
            router.push("/mirine");
          }}
        />
      ) : (
        <>
          <BuyButton onClick={() => setIsSheetOpen(true)} />
          <BottomSheet data={data} isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
        </>
      )}
    </article>
  );
}
