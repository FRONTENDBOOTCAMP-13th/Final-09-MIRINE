'use client';
import { useState } from "react";
import styles from "./listGrid.module.css";
import Image from "next/image";

export default function ListGrid(){
  const [active, setActive] = useState<"list"|"grid">('grid');

  return(
    <div className={styles.icon_section}>
          <ul className={styles.view_options}>
            <li className={`${styles.view_btn} ${active === 'list' ? styles.active : ''}`}>
              <button 
                type="button" 
                aria-label="리스트 보기"
                onClick={() => setActive('list')}>
                <Image src="/icon/Icon-layout-list.svg" alt="리스트" width={18} height={14} />
              </button>
            </li>
            <li className={`${styles.view_btn} ${active === 'grid' ? styles.active : ''}`}>
              <button 
                type="button" 
                aria-label="그리드 보기"
                onClick={() => setActive('grid')}>
                <Image src="/icon/Icon-layout-grid.svg" alt="그리드" width={18} height={14} />  
              </button>
            </li>
          </ul>

          
      </div>
  )
}