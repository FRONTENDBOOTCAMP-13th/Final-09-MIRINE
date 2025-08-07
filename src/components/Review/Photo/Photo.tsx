"use client";
import { ReviewItem } from "@/types/review";
import styles from "./photo.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Photo({ data }: { data: ReviewItem[] | null }) {
  const [reviewList, setReviewList] = useState<ReviewItem[] | null>(data);
  useEffect(() => {
    setReviewList(data);
  }, [data]);
  return (
    <div className={styles.photo}>
      {reviewList &&
        reviewList.map((e) => (
          <div key={e._id} className={`${styles.photo_item} ${!e.extra.images[0] ? styles.default_image : ""}`}>
            <Link href={`/reviews/${e._id}`} className={styles.link}>
              <Image src={e.extra.images[0] || "logo/logo-black-pc.svg"} alt="리뷰 사진" width={106} height={106} className={styles.photo_image} />
            </Link>
          </div>
        ))}
    </div>
  );
}
