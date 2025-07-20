"use client";
import { useState } from "react";
import styles from "./filterButton.module.css";
interface FilterButtonProp {
  filterText: string;
}
export default function FilterButton({ filterText }: FilterButtonProp) {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={`${styles.filter_button} ${isActive && styles.active}`}
    >
      {filterText}
    </button>
  );
}
