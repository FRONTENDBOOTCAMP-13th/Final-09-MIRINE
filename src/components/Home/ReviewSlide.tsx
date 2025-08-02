"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./reviewSlide.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ReviewSlide() {
  return (
    <div className={styles.review_slide}>
      <h3 className={styles.title}>REVIEW</h3>

      <div className={styles.swiper_container}>
        <Swiper
          className={styles.swiper}
          modules={[Autoplay]}
          spaceBetween={14}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/review/1">
              <Image width={300} height={300} src="/home/mirineshop.webp" alt="리뷰" />
              <p>리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용 리뷰내용</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <Link href="/review" className={styles.link}>
        View More
      </Link>
    </div>
  );
}
