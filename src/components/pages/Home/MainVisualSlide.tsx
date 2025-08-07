"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./mainVisualSlide.module.css";
import Image from "next/image";
import HomeButton from "@/components/pages/Home/Button/HomeButton";

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
              <Image src="/home/main-sld-mirine.webp" width={1300} height={600} alt="미리내" />
              <div className={styles.sld_content}>
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

            <SwiperSlide className={styles.mvs_2}>
              <Image src="/home/main-sld-review.webp" width={1300} height={600} alt="후기" />
              <div className={styles.sld_content}>
                <div className={styles.text}>
                  <p className={styles.sub_script}>고객들의 진짜 후기</p>
                  <p className={styles.main_script}>
                    <strong>미리내</strong>와 함께한 특별한 순간들
                  </p>
                </div>
                <div className={styles.button}>
                  <p>더 많은 후기 보기</p>
                  <HomeButton href={"/reviews"}>View More</HomeButton>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className={styles.mvs_3}>
              <Image src="/home/main-sld-aromashooter.webp" width={1300} height={600} alt="아로마슈터" />
              <div className={styles.sld_content}>
                <div className={styles.text}>
                  <p className={styles.main_script}>
                    <strong>아로마슈터</strong>로 <span className={styles.text_color}>나만의 향</span>을 찾아보세요
                  </p>
                  <p className={styles.sub_script}>
                    <span className={styles.text_color}>60가지 향</span>을 미리 체험하세요
                  </p>
                </div>
                <HomeButton href={"/aroma-shooter"}>View More</HomeButton>
              </div>
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
