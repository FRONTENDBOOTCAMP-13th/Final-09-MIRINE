'use client'
import styles from "@/components/ShoppingCart/CartControls/cartControls.module.css"
export default function CartControls(){
  return (
    <div>
      <div className={styles.btn_group}>
        <button 
          type="button" 
          className={styles.btn_delete}
          onClick={() => console.log('전체 선택')}
          >
          전체 선택
        </button>

        <button  
          type="button" 
          className={styles.btn_selection}
          onClick={() => console.log('선택 삭제')}
          >
          선택 삭제
        </button>
      </div>
    </div>
  
)
}
  