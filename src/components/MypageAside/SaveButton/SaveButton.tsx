'use client'
import styles from '@/components/MypageAside/SaveButton/saveButton.module.css'
export default function SaveButton(){
  return(
    <div className={styles.btn}>
      <button 
        className={styles.save_btn}
        onClick={()=>{console.log('저장')}}
      >저장</button>
    </div>
  )
}