import SearchBar from "@/components/perfumes/SearchBar/SearchBar";
import styles from "./page.module.css";
import FilterSection from "@/components/perfumes/FilterSection/FilterSection";
import PerfumeItem from "@/components/perfumes/PerfumeItem/PerfumeItem";
import { getAllPerfumes, getProduct } from "@/lib/function";
import { Perfume } from "@/types/perfume";
export default async function Perfumes() {
  const mainAccordSectionTitle = "메인어코드";
  const mainAccordFilterTextList = ["전체", "우디", "시트러스", "머스크", "플로럴", "스위트"];
  const brandSectionTitle = "브랜드";
  const brandFilterTextList = ["전체", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  const itemCount = 123; // db에서 가져올 숫자
  const data = await getAllPerfumes();
  const data1 = await getProduct(3);
  console.log(data);
  console.log(data.item[0].mainImages[0].path);
  console.log();
  console.log(data1);
  return (
    <div className={styles.perfumes}>
      <h2 className={styles.header}>향수</h2>
      {/* 검색 바 */}
      <SearchBar id={"perfumeSearch"} />
      {/* 메인어코드 필터 섹션 */}
      <FilterSection filterSectionTitle={mainAccordSectionTitle} filterTextList={mainAccordFilterTextList} />
      {/* 브랜드 필터 섹션 */}
      <FilterSection filterSectionTitle={brandSectionTitle} filterTextList={brandFilterTextList} />
      {/* 향수 섹션 */}
      <section className={styles.perfume_main}>
        {/* 향수 총 개수 */}
        <p className={styles.perfume_count}>상품 총 {itemCount}개</p>

        <ul className={styles.perfume_container}>
          {data.item.map((item: Perfume) => (
            <li key={item._id}>
              <PerfumeItem id={item._id} item={item} path={item.mainImages[0].path} inMirine={false} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
