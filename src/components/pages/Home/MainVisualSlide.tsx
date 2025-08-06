"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./mainVisualSlide.module.css";
import Image from "next/image";

export default function MainVisualSlide() {
  return (
    <>
      <div className={styles.main_visual_slide}>
        <div className={styles.swiper_container}>
          <Swiper
            className={styles.swiper}
            slidesPerView={"auto"}
            spaceBetween={20}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".next_mvs",
              prevEl: ".prev_mvs",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              768: {
                spaceBetween: 30,
              },
              1280: {
                spaceBetween: 70,
              },
            }}
          >
            <SwiperSlide className={styles.mvs_1}>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
              <div className={styles.text_content}>
                <h4>미리내</h4>
                <p className={styles.main_script}>
                  <span>
                    <b>&apos;은하수&apos;</b>를 뜻하는 순우리말,
                  </span>
                  <span>
                    <b>&apos;미리&apos;</b>맡고 느낄 수 있는 향의 흐름.
                  </span>
                </p>
                <p className={styles.sub_script}>
                  <span>당신의 취향이 흐르는 방향을</span>
                  <span>천천히 따라가보세요.</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/main-visual-slide-1.webp" width={1300} height={600} alt="slide_1" />
            </SwiperSlide>
          </Swiper>

          <div className={styles.swiper_navigation}>
            <div className={`${styles.prev_mvs || ""} ${styles.nav} prev_mvs`}>&lt;</div>
            <div className={`${styles.next_mvs || ""} ${styles.nav} next_mvs`}>&gt;</div>
          </div>
        </div>

        <Image className={styles.main_visual_logo} width={500} height={121} src="/logo/logo-black-pc.svg" alt="미리내 로고" />
      </div>
    </>
  );
}
