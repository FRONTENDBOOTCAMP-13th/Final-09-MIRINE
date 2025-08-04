"use client";
import styles from "./detailPage.module.css";
import ProductHeader from "@/components/Mirine/ProductHeader/ProductHeader";
import ProductInfo from "@/components/Mirine/ProductInfo/ProductInfo";
import ProductTabs from "@/components/Mirine/ProductTabs/ProductTabs";
import BuyButton from "@/components/perfumes/BuyButton/BuyButton";
import BottomSheet from "@/components/perfumes/DetailPage/BottomSheet/BottomSheet";
import { Perfume } from "@/types/perfume";
import { useState } from "react";

export default function PerfumeDetailPage({ id, data }: { id: string; data: Perfume }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <article className={styles.product_detail}>
      {/* 이미지, 찜, 링크 공유 */}
      <ProductHeader path={data.mainImages[0].path} />

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
      <BuyButton onClick={() => setIsSheetOpen(true)} />

      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </article>
  );
}
