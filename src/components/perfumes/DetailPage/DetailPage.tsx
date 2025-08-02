'use client';
import styles from "./detailPage.module.css";
import ProductHeader from "@/components/Mirine/ProductHeader/ProductHeader";
import ProductInfo from "@/components/Mirine/ProductInfo/ProductInfo";
import ProductTabs from "@/components/Mirine/ProductTabs/ProductTabs";
import BuyButton from "@/components/perfumes/BuyButton/BuyButton";
import BottomSheet from "@/components/perfumes/DetailPage/BottomSheet/BottomSheet";
import { useState } from "react";

export default function PerfumeDetailPage(){
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  return(
    <article className={styles.product_detail}>
      {/* 이미지, 찜, 링크 공유 */}
      <ProductHeader />

      {/* 제품 정보 */}
      <ProductInfo />  

      <div className={styles.line}></div>

      {/* 탭 */}
      <ProductTabs />

      {/* 구매하기 버튼 */}
      <BuyButton onClick={() => setIsSheetOpen(true)} />

      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}/>

    </article>
  )
}