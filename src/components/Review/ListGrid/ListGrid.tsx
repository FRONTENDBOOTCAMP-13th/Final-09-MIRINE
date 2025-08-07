"use client";
import styles from "./listGrid.module.css";

export default function ListGrid({ listOrGrid, setListOrGrid }: { listOrGrid: "list" | "grid"; setListOrGrid: (item: "list" | "grid") => void }) {
  // const [active, setActive] = useState<"list" | "grid">(listOrGrid);

  return (
    <div className={styles.icon_section}>
      <ul className={styles.view_options}>
        <li className={`${styles.view_btn} ${listOrGrid === "list" ? styles.active : ""}`}>
          <button type="button" aria-label="리스트 보기" onClick={() => setListOrGrid("list")}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="5" y="7" width="6.67" height="6.67" rx="1.9" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
              <rect x="5" y="15.89" width="6.67" height="6.67" rx="1.9" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
              <rect x="15" y="7" width="10" height="2.22" rx="1.11" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
              <rect x="15" y="11.44" width="5.44" height="2.22" rx="1.11" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
              <rect x="15" y="15.89" width="10" height="2.22" rx="1.11" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
              <rect x="15" y="20.33" width="5.44" height="2.22" rx="1.11" fill={`var(--black-${listOrGrid === "list" ? "950" : "200"})`} />
            </svg>
          </button>
        </li>
        <li className={`${styles.view_btn} ${listOrGrid === "grid" ? styles.active : ""}`}>
          <button type="button" aria-label="그리드 보기" onClick={() => setListOrGrid("grid")}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect x="6" y="6" width="7.71" height="7.71" rx="2.2" fill={`var(--black-${listOrGrid === "grid" ? "950" : "200"})`} />
              <rect x="6" y="16.29" width="7.71" height="7.71" rx="2.2" fill={`var(--black-${listOrGrid === "grid" ? "950" : "200"})`} />
              <rect x="16.29" y="6" width="7.71" height="7.71" rx="2.2" fill={`var(--black-${listOrGrid === "grid" ? "950" : "200"})`} />
              <rect x="16.29" y="16.29" width="7.71" height="7.71" rx="2.2" fill={`var(--black-${listOrGrid === "grid" ? "950" : "200"})`} />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
