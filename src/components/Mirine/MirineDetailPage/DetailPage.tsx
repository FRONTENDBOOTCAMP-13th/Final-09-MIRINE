import styles from "./detailPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function DetailPage(){
  // const reviewCount = 100;
  // const HeartIcon = () => {
  //   <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M19 14.5C20.49 13.04 22 11.29 22 9C22 7.54131 21.4205 6.14236 20.3891 5.11091C19.3576 4.07946 17.9587 3.5 16.5 3.5C14.74 3.5 13.5 4 12 5.5C10.5 4 9.26 3.5 7.5 3.5C6.04131 3.5 4.64236 4.07946 3.61091 5.11091C2.57946 6.14236 2 7.54131 2 9C2 11.3 3.5 13.05 5 14.5L12 21.5L19 14.5Z" stroke="#982e2e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  //   </svg>
  // }
  
  return(
    <article className={styles.product_detail}>
      {/* 이미지, 찜, 링크 공유 */}
      <header className={styles.img_btn_section}>
        <div className={styles.image}>
          <Image src="/image/perfume1.svg" alt="상품이미지" width={360} height={360} />
        </div>
        <div className={styles.action_buttons}>
          <button className={styles.zzim_btn} aria-label="찜하기" type="button">
             <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 14.5C20.49 13.04 22 11.29 22 9C22 7.54131 21.4205 6.14236 20.3891 5.11091C19.3576 4.07946 17.9587 3.5 16.5 3.5C14.74 3.5 13.5 4 12 5.5C10.5 4 9.26 3.5 7.5 3.5C6.04131 3.5 4.64236 4.07946 3.61091 5.11091C2.57946 6.14236 2 7.54131 2 9C2 11.3 3.5 13.05 5 14.5L12 21.5L19 14.5Z" 
              stroke="var(--black-300)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button className={styles.share_btn} aria-label="공유하기"type="button">
            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0002 13.5C10.4297 14.0742 10.9776 14.5492 11.6067 14.893C12.2359 15.2367 12.9317 15.4411 13.6468 15.4924C14.362 15.5436 15.0798 15.4404 15.7515 15.1898C16.4233 14.9392 17.0333 14.5471 17.5402 14.04L20.5402 11.04C21.451 10.097 21.955 8.834 21.9436 7.52302C21.9322 6.21204 21.4063 4.95797 20.4793 4.03093C19.5523 3.10389 18.2982 2.57805 16.9872 2.56666C15.6762 2.55526 14.4132 3.05924 13.4702 3.97003L11.7502 5.68003M14.0002 11.5C13.5707 10.9259 13.0228 10.4508 12.3936 10.1071C11.7645 9.76333 11.0687 9.55891 10.3535 9.50769C9.63841 9.45648 8.92061 9.55966 8.24885 9.81025C7.5771 10.0608 6.96709 10.453 6.4602 10.96L3.4602 13.96C2.54941 14.903 2.04544 16.166 2.05683 17.477C2.06822 18.788 2.59407 20.0421 3.52111 20.9691C4.44815 21.8962 5.70221 22.422 7.01319 22.4334C8.32418 22.4448 9.58719 21.9408 10.5302 21.03L12.2402 19.32" 
              stroke="var(--black-950)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* 제품 정보 */}
      <section className={styles.info}>
        <div className={styles.product_info}>
          <span className={styles.brand_name}>브랜드</span>
          <h2 className={styles.product_name}>제품이름</h2>
          <span className={styles.price}>가격</span>
        </div>
      
        <p className={styles.product_description}>상품 간단 설명</p>

        <div>
          <p className={styles.tag}>#해시태그</p>
        </div>
      </section> 
      <div className={styles.line}></div>

      {/* 탭 */}
      {/* <nav>
        <ul className={styles.product_review_section}>
          <li className={styles.product}>
            <Link>상품설명</Link>
          </li>

          <li className={styles.review}>
            <Link>리뷰<span>{reviewCount}</span><span>별점</span></Link>
          </li>
        </ul>
      </nav> */}

    </article>
  )
}