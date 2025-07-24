// import Link from "next/link";
import styles from "./photo.module.css";
import Image from "next/image";
import Link from "next/link";
import ReviewCommon from "@/components/Review/ReviewCommon";

export default function Photo(){
  return (
    <div className={styles.photo}>
      <Link href="/reviews">
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
      </Link>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
        <Image src="/image/perfume1.svg" alt="리뷰 사진" width={106} height={106} className={styles.item}/>
    </div>
  )
}