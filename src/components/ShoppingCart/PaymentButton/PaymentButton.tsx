import styles from '@/components/ShoppingCart/PaymentButton/payment.module.css'
export default function PaymentButton() {
  return (
    <div>
      <button 
          type="button" 
          className={styles.btn_payment}
          onClick={() => {console.log('결제하기')}}
          >
          결제하기
        </button>
    </div>
  )
}