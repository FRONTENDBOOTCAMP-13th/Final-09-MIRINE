'use client';
import { useState } from "react";
import styles from "./productHeader.module.css";
import Image from "next/image";

export default function ProductHeader(){
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => { console.log('링크 복사')};

  return (
    <div>
      {/* 이미지, 찜, 링크 공유 */}
      <header className={styles.img_btn_section}>
        <div className={styles.image}>
          <Image src="/image/perfume1.svg" alt="상품이미지" width={360} height={360} />
        </div>
        {/* 찜, 공유 버튼 */}
        <div className={styles.action_buttons}>
          <button className={styles.like_btn} aria-label="찜하기" type="button"
            onClick={()=> {setIsActive(!isActive)}}
          >
            {isActive ? (
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" stroke="#C2C2C2"/>
              </svg>
            ) : (
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" fill="#EFE7FF" stroke="#B090EE"/>
            </svg>
            )}
          </button>
          {/* 공유 버튼 */}
          <button className={styles.share_btn} type="button" 
            onClick={handleButtonClick}
          >
            <svg width={20} height={20} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 13.5C10.4297 14.0742 10.9776 14.5492 11.6067 14.893C12.2359 15.2367 12.9317 15.4411 13.6468 15.4924C14.362 15.5436 15.0798 15.4404 15.7515 15.1898C16.4233 14.9392 17.0333 14.5471 17.5402 14.04L20.5402 11.04C21.451 10.097 21.955 8.834 21.9436 7.52302C21.9322 6.21204 21.4063 4.95797 20.4793 4.03093C19.5523 3.10389 18.2982 2.57805 16.9872 2.56666C15.6762 2.55526 14.4132 3.05924 13.4702 3.97003L11.7502 5.68003M14.0002 11.5C13.5707 10.9259 13.0228 10.4508 12.3936 10.1071C11.7645 9.76333 11.0687 9.55891 10.3535 9.50769C9.63841 9.45648 8.92061 9.55966 8.24885 9.81025C7.5771 10.0608 6.96709 10.453 6.4602 10.96L3.4602 13.96C2.54941 14.903 2.04544 16.166 2.05683 17.477C2.06822 18.788 2.59407 20.0421 3.52111 20.9691C4.44815 21.8962 5.70221 22.422 7.01319 22.4334C8.32418 22.4448 9.58719 21.9408 10.5302 21.03L12.2402 19.32" 
              stroke="var(--black-950)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>
    </div>
  )
}