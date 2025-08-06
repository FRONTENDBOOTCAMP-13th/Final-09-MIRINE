'use client';
import { useState } from "react";
import styles from "@/components/Review/reviewCommon.module.css"
import ReviewSample from "@/app/devtest/actiontest/review/ReviewSample";


export default function ReviewBtnPage(){
  const [active, setActive] = useState<"mirine"|"perfume"|"aroma">('perfume');
  // const [userId, setUserId] = useState('');

  // useEffect(()=>{
  //   const id = localStorage.getItem('userId') || '';
  //   setUserId(id);
  // }, []);

  const renderContent = () => {
    switch(active){
      case 'mirine':
        return (
          <div className={styles.message}>
            <p>미리내 리뷰 준비중입니다.</p>
          </div>
        );
        case 'perfume':
          return <ReviewSample />;
        case 'aroma':
          return(
            <div className={styles.message}>
            <p>아로마슈터 리뷰 준비중입니다.</p>
          </div>
          );
        default:
          return null;
    }
  };

  return(
    <div className={styles.common_section}>
      <nav className={styles.btn_group}>
        <ul className={styles.category_list}>
          <li className={`${styles.category_btn} ${active === 'mirine' ? styles.active : ''}`} >
            <button 
              onClick={() => setActive('mirine')}    
            >
              미리내
            </button>
          </li>
          <li className={`${styles.category_btn} ${active === 'perfume' ? styles.active : ''}`}>
            <button 
              onClick={() => setActive('perfume')} 
            >
              향수
            </button>
          </li>
          <li className={`${styles.category_btn} ${active === 'aroma' ? styles.active : ''}`}>
            <button 
              onClick={() => setActive('aroma')} 
            >
              아로마슈터
            </button>
          </li>
        </ul>
      </nav>

      <section className={styles.tab_content}>
        {renderContent()}
      </section>
    </div>
  )
}