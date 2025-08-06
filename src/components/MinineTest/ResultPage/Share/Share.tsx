'use client'
import styles from "@/components/MinineTest/ResultPage/Share/share.module.css"
import Image from "next/image";

export default function Share(){
  return (

    <div className={styles.share}>
        <button 
          type="button" 
          className={styles.kakao}
          onClick={() => console.log("카카오톡 공유 준비 중")} >
          <Image src="/icon/Icon-kakao.svg" alt="링크" width="42" height="42" />
        </button>
        
        <button 
          type="button" 
          className={styles.link}
          onClick={() => console.log("링크 공유 준비 중")} 
          >
          <Image src="/icon/Icon-link5.svg" alt="링크" width="42" height="42" />
        </button>
      </div>
  )
}