"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./reviewSlide.module.css";
import Image from "next/image";
import Link from "next/link";
import HomeButton from "@/components/pages/Home/Button/HomeButton";

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
              <Image width={300} height={300} src="/home/review_1.webp" alt="리뷰" />
              <p>향이 정말 오래가고 은은해서 너무 좋아요! 아침에 뿌리면 저녁까지 은은하게 남아있어서 데일리로 쓰기 완벽한 것 같아요. 향도 자극적이지 않고 부드러워서 매일 사용하고 있어요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/2">
              <Image width={300} height={300} src="/home/review_2.webp" alt="리뷰" />
              <p>포장도 고급스럽고 향도 독특해서 만족해요. 주변에서 향수 뭐 쓰냐고 물어봐요. 다른 향수와는 확실히 다른 개성이 있어서 특별한 느낌이 들어요. 선물받은 느낌이라 기분이 좋네요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/3">
              <Image width={300} height={300} src="/home/review_3.webp" alt="리뷰" />
              <p>선물로 받았는데 너무 마음에 들어서 추가로 주문했어요. 향이 정말 우아하고 세련된 느낌이에요. 처음 맡았을 때부터 이건 특별하다는 생각이 들었고, 사용할수록 더 매력적으로 느껴져요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/4">
              <Image width={300} height={300} src="/home/review_4.webp" alt="리뷰" />
              <p>천연 성분이라 그런지 피부에 자극이 없고 향도 자연스러워서 좋네요. 예민한 피부라 걱정했는데 전혀 문제없어요. 인공적인 느낌이 아니라 정말 자연에서 나는 향 같아서 편안해요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/5">
              <Image width={300} height={300} src="/home/review_5.webp" alt="리뷰" />
              <p>처음엔 향이 강한가 싶었는데 시간이 지나면서 정말 매력적으로 변해요! 탑노트, 미들노트, 베이스노트가 확실히 다르게 느껴져서 향수의 깊이를 알 수 있어요. 하루 종일 다른 매력을 보여주네요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/6">
              <Image width={300} height={300} src="/home/review_6.webp" alt="리뷰" />
              <p>남편이 써도 좋다고 해서 커플향수로 쓰고 있어요. 유니섹스 향이 매력적이에요. 너무 여성스럽지도, 남성스럽지도 않아서 누구나 사용할 수 있을 것 같아요. 함께 쓸 수 있어서 더 특별해요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/7">
              <Image width={300} height={300} src="/home/review_7.webp" alt="리뷰" />
              <p>가격대비 퀄리티가 정말 좋아요. 명품 향수 못지않은 품질인 것 같아요. 지속력도 좋고 향의 변화도 풍부해서 비싼 향수 부럽지 않아요. 이 가격에 이런 퀄리티라니 정말 만족스러워요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/8">
              <Image width={300} height={300} src="/home/review_8.webp" alt="리뷰" />
              <p>향수 취향 테스트 받고 주문했는데 정말 제 취향 저격이에요. 추천해요! 테스트 결과가 정말 정확한 것 같아요. 제가 좋아하는 스타일을 정확히 파악해서 추천해주신 것 같아서 신기했어요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/9">
              <Image width={300} height={300} src="/home/review_9.webp" alt="리뷰" />
              <p>배송도 빠르고 포장도 꼼꼼해서 선물용으로도 완벽해요. 재주문 의사 100%! 박스 포장부터 리본까지 정말 세심하게 해주셔서 받는 사람이 기분 좋을 것 같아요. 서비스가 정말 좋네요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/10">
              <Image width={300} height={300} src="/home/review_10.webp" alt="리뷰" />
              <p>향이 너무 독특하고 개성있어서 다른 사람들과 겹치지 않아서 좋아요. 흔한 향수가 아니라 나만의 시그니처 향을 찾은 기분이에요. 어디서도 맡아본 적 없는 독특한 조합이 정말 매력적이에요.</p>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="/review/11">
              <Image width={300} height={300} src="/home/review_11.webp" alt="리뷰" />
              <p>조향사님이 직접 만드신다니 더 믿음이 가요. 향의 깊이가 정말 다르네요. 대량생산 향수와는 확실히 차별화되는 느낌이에요. 하나하나 정성스럽게 만드신 게 느껴져서 더욱 소중하게 사용하고 있어요.</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <HomeButton href={"/reviews"}>View More</HomeButton>
    </div>
  );
}
