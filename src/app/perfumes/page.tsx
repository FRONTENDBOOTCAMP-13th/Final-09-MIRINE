import SearchBar from "@/components/perfumes/SearchBar/SearchBar";
// import DetailSearchToggleButton from "@/components/perfumes/DetailSearchToggleButton/DetailSearchToggleButton";
// import FilterButton from "@/components/perfumes/FilterButton/FilterButton";
import styles from "./page.module.css";
import FilterSection from "@/components/perfumes/FilterSection/FilterSection";
import PerfumeItem from "@/components/perfumes/PerfumeItem/PerfumeItem";
import { getAllPerfumes, getPerfume } from "@/lib/function";
// import Image from "next/image";
import { Perfume } from "@/types/perfume";
export default async function Perfumes() {
  const mainAccordSectionTitle = "메인어코드";
  const mainAccordFilterTextList = ["전체", "우디", "시트러스", "머스크", "플로럴", "스위트"];
  const brandSectionTitle = "브랜드";
  const brandFilterTextList = ["전체", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
  const itemCount = 123; // db에서 가져올 숫자
  // const res = await fetch("http://localhost:3000/api/perfumes"); // /src/api/perfumes/route.tsㅅ
  // const data = await res.json();
  const data = await getAllPerfumes();
  const data1 = await getPerfume(3); // 이거 api 오류임
  console.log(data);
  console.log(data.item[0].mainImages[0].path);
  console.log();
  console.log(data1);
  return (
    <div className={styles.perfumes}>
      <h2 className={styles.header}>향수</h2>
      <SearchBar id={"perfumeSearch"} />
      <FilterSection filterSectionTitle={mainAccordSectionTitle} filterTextList={mainAccordFilterTextList} />
      <FilterSection filterSectionTitle={brandSectionTitle} filterTextList={brandFilterTextList} />
      <section className={styles.perfume_main}>
        <p className={styles.perfume_count}>상품 총 {itemCount}개</p>

        <ul className={styles.perfume_container}>
          {data.item.map((item: Perfume) => (
            <li key={item._id}>
              <PerfumeItem path={item.mainImages[0].path} />
            </li>
          ))}
        </ul>
        {/* <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem />
        <PerfumeItem /> */}
      </section>
      {/* {data.item.map((item: Perfume) => (
        <Image key={item._id} src={getFile(item.mainImages[0].path)} alt={"alt"} fill />
      ))} */}
      {/* {data.item.map((item: Perfume) => (
        <p key={item._id}>{item.mainImages[0].path}</p>
      ))} */}
    </div>
  );
}
