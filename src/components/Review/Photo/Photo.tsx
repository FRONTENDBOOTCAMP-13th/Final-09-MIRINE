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
          <Link key={e._id} href={`/reviews/${e._id}`}>
            <Image src={e.extra.images[0]} alt="리뷰 사진" width={106} height={106} className={styles.item} />
          </Link>
        ))}
    </div>
  );
}
