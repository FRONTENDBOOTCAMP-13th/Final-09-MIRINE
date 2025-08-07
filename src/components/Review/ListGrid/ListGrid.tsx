"use client";
import styles from "./listGrid.module.css";

export default function ListGrid({ listOrGrid, setListOrGrid }: { listOrGrid: "list" | "grid"; setListOrGrid: (item: "list" | "grid") => void }) {
  // const [active, setActive] = useState<"list" | "grid">(listOrGrid);

  return (
    <div className={styles.icon_section}>
      <ul className={styles.view_options}>
        <li className={`${styles.view_btn} ${listOrGrid === "list" ? styles.active : ""}`}>
          <button type="button" aria-label="리스트 보기" onClick={() => setListOrGrid("list")}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4.5H21M14 9.5H21M14 15.5H21M14 20.5H21M4 3.5H9C9.55228 3.5 10 3.94772 10 4.5V9.5C10 10.0523 9.55228 10.5 9 10.5H4C3.44772 10.5 3 10.0523 3 9.5V4.5C3 3.94772 3.44772 3.5 4 3.5ZM4 14.5H9C9.55228 14.5 10 14.9477 10 15.5V20.5C10 21.0523 9.55228 21.5 9 21.5H4C3.44772 21.5 3 21.0523 3 20.5V15.5C3 14.9477 3.44772 14.5 4 14.5Z" stroke={`var(--black-${listOrGrid === "list" ? "95" : "20"}0)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </li>
        <li className={`${styles.view_btn} ${listOrGrid === "grid" ? styles.active : ""}`}>
          <button type="button" aria-label="그리드 보기" onClick={() => setListOrGrid("grid")}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3.5H4C3.44772 3.5 3 3.94772 3 4.5V9.5C3 10.0523 3.44772 10.5 4 10.5H9C9.55228 10.5 10 10.0523 10 9.5V4.5C10 3.94772 9.55228 3.5 9 3.5Z" fill={`var(--black-${listOrGrid === "grid" ? "95" : "20"}0)`} />
              <path d="M9 3.5H4C3.44772 3.5 3 3.94772 3 4.5V9.5C3 10.0523 3.44772 10.5 4 10.5H9C9.55228 10.5 10 10.0523 10 9.5V4.5C10 3.94772 9.55228 3.5 9 3.5Z" stroke={`var(--black-${listOrGrid === "grid" ? "95" : "20"}0)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 3.5H15C14.4477 3.5 14 3.94772 14 4.5V9.5C14 10.0523 14.4477 10.5 15 10.5H20C20.5523 10.5 21 10.0523 21 9.5V4.5C21 3.94772 20.5523 3.5 20 3.5Z" stroke={`var(--black-${listOrGrid === "grid" ? "95" : "20"}0)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 14.5H15C14.4477 14.5 14 14.9477 14 15.5V20.5C14 21.0523 14.4477 21.5 15 21.5H20C20.5523 21.5 21 21.0523 21 20.5V15.5C21 14.9477 20.5523 14.5 20 14.5Z" stroke={`var(--black-${listOrGrid === "grid" ? "95" : "20"}0)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 14.5H4C3.44772 14.5 3 14.9477 3 15.5V20.5C3 21.0523 3.44772 21.5 4 21.5H9C9.55228 21.5 10 21.0523 10 20.5V15.5C10 14.9477 9.55228 14.5 9 14.5Z" stroke={`var(--black-${listOrGrid === "grid" ? "95" : "20"}0)`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
