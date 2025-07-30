'use client'
import LikeButton from '@/components/MypageAside/LikeList/LikeButton/LikeButton';
import styles from '@/components/MypageAside/LikeList/likeList.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function LikeListPage(){
  const router = useRouter();

  const handleItemClick = () => {
    router.push('/perfumes'); //페이지 오류
  }

  return(
    <div className={styles.list_section}>
      <div className={styles.list_wrapper} onClick={handleItemClick} >
        <div className={styles.list_group}>
          <Image src="/image/perfume1.svg" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
          
          <div className={styles.item_info}>
            <p className={styles.brand_name}>브랜드</p>
            <p className={styles.product_name}>향수이름</p>
          </div>
          <div className={styles.like_btn}>
            <LikeButton />
          </div>
          
        </div>
      </div>


    </div>
  )
}