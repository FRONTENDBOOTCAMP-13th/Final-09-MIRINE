import CancelButton from '@/components/MypageAside/ReviewWriteEdit/Button/Cancel/CancelBtn';
import RegisterButton from '@/components/MypageAside/ReviewWriteEdit/Button/Register/RegisterBtn';
import styles from '@/components/MypageAside/ReviewWriteEdit/reviewWriteEdit.module.css'
import Image from "next/image";

export default function ReviewWriteEdit(){
  return (
    <div className={styles.wrapper}>
        <div className={styles.list_group}>
          <Image src="/image/perfume1.svg" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름</p>
          </div>
        </div>

        <div className={styles.write_wrapper}>
          <div className={styles.star_wrapper}>
            <p className={styles.star_title}>별점주기</p>
            <div>
              
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.photo_wrapper}>
            <p className={styles.photo_title}>사진 업로드</p>
            <div className={styles.photo_box}>
              <Image src="/" alt="이미지" width={52} height={52} className={styles.img_box} />
              <Image src="/" alt="이미지" width={52} height={52} className={styles.img_box} />
              <Image src="/" alt="이미지" width={52} height={52} className={styles.img_box} />
              <Image src="/" alt="이미지" width={52} height={52} className={styles.img_box} />
              <Image src="/" alt="이미지" width={52} height={52} className={styles.img_box} />
            </div>
            <p className={styles.error_text}>*최대 5까지 등록 가능합니다.</p>
          </div>

          <div className={styles.line}></div>

          <div className={styles.review_write_wrapper}>
            <p className={styles.review_write_title}>리뷰 작성</p>
              <div className={styles.review_write_box}>
                <p className={styles.text}>*해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적절한 내용은 삭제될 수 있습니다.</p>
              </div>
              <p className={styles.error_text}>*최소 10자 이상 입력해 주세요.</p>
          </div>
        </div>

        <div className={styles.btn_broup}>
            <CancelButton />
            <RegisterButton />
        </div>
    </div>
  )
}