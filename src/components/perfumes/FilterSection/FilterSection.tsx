"use client";
import { useState } from "react";
import DetailSearchToggleButton from "../DetailSearchToggleButton/DetailSearchToggleButton";
import FilterButton from "../FilterButton/FilterButton";
import styles from "./filterSection.module.css";

export interface FilterSectionProp {
  filterSectionTitle: string;
  filterTextList: string[];
}

export default function FilterSection({ filterSectionTitle, filterTextList }: FilterSectionProp) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className={styles.filter_section}>
      <div className={styles.filter_section_title_wrapper}>
        <p className={styles.filter_section_title}>{filterSectionTitle}</p>
        <DetailSearchToggleButton
          isActive={isActive}
          handleActive={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
      {isActive &&
        (filterSectionTitle === "메인어코드" ? (
          <ul className={styles.main_accord_filter_section_btn_container}>
            {filterTextList.map((item: string) => (
              <li key={item}>
                <FilterButton filterText={item} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.brand_filter_section_btn_container}>
            {filterTextList.map((item: string) => (
              <li key={item}>
                <FilterButton filterText={item} />
              </li>
            ))}
          </ul>
        ))}
    </section>
  );
}
