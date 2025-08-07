import SearchBar from "@/components/perfumes/SearchBar/SearchBar";
import styles from "./page.module.css";
import FilterSection from "@/components/perfumes/FilterSection/FilterSection";
import { getAllPerfumes } from "@/lib/function";
import { Perfume } from "@/types/perfume";
import MirineListSection from "@/components/Mirine/MirineListSection/MirineListSection";
import PerfumeList from "@/components/perfumes/PerfumeList/PerfumeList";
export default async function Mirine() {
  const mainAccordSectionTitle = "메인어코드";
  const mainAccordFilterTextList = ["전체", "우디", "시트러스", "머스크", "플로럴", "스위트"];
  const brandSectionTitle = "브랜드";
  const brandFilterTextList = ["전체", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  const perfumeData: { ok: number; item: Perfume[] } = await getAllPerfumes();
  const data = { ok: perfumeData.ok, item: perfumeData.item.slice(0, perfumeData.item.length - 11) };
  return (
    <>
      <div className={styles.perfumes}>
        <h2 className={styles.header}>미리내</h2>
        {/* 검색 바 */}
        <SearchBar id={"perfumeSearch"} />
        {/* 메인어코드 필터 섹션 */}
        <FilterSection filterSectionTitle={mainAccordSectionTitle} filterTextList={mainAccordFilterTextList} />
        {/* 브랜드 필터 섹션 */}
        <FilterSection filterSectionTitle={brandSectionTitle} filterTextList={brandFilterTextList} />
        {/* 향수 섹션 */}
        <section className={styles.perfume_main}>
          {/* 향수 총 개수 */}
          <p className={styles.perfume_count}>상품 총 {data.item.length}개</p>

          <PerfumeList data={data} inMirine={true} />
        </section>
      </div>
      <MirineListSection />
    </>
  );
}
