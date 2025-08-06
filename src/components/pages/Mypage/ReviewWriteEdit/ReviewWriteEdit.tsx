"use client";
import { useState, useEffect } from "react";
import CancelButton from "@/components/pages/Mypage/ReviewWriteEdit/Button/Cancel/CancelBtn";
import RegisterButton from "@/components/pages/Mypage/ReviewWriteEdit/Button/Register/RegisterBtn";
import styles from "@/components/pages/Mypage/ReviewWriteEdit/reviewWriteEdit.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import StarRating from "@/components/pages/Mypage/StartRating/StarRating";

interface ReviewWriteEditProps {
  mode: "write" | "edit";
  reviewId?: string;
  initialData?: {
    content?: string;
    rating?: number;
    images?: string[];
    productInfo?: {
      brand: string;
      name: string;
      image: string;
    };
  };
}

export default function ReviewWriteEdit({ mode = "write", reviewId, initialData }: ReviewWriteEditProps) {
  const router = useRouter();
  const [content, setContent] = useState(initialData?.content || "");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [images, setImages] = useState<string[]>(initialData?.images || []);

  useEffect(() => {
    if (mode === "edit" && reviewId && !initialData) {
      fetchReviewData(reviewId);
    }
  }, [mode, reviewId, initialData]);

  const fetchReviewData = async (id: string) => {
    try {
      const response = await fetch(`${URL}/replies/${id}`);
      const data = await response.json();

      setContent(data.content || "");
      setRating(data.rating || 0);
      setImages(data.images || []);
    } catch (error) {
      console.error("리뷰 데이터 로드 실패:", error);
    }
  };

  const onSubmit = async () => {
    if (content.trim().length < 10) {
      setError("*최소 10자 이상 입력해 주세요.");
      return;
    }

    try {
      if (mode === "write") {
        // 새 리뷰 작성
        console.log("리뷰 등록됨:", { content, rating, images });
        // await createReview({ content, rating, images });
      } else {
        // 기존 리뷰 수정
        console.log("리뷰 수정됨:", { reviewId, content, rating, images });
        // await updateReview(reviewId, { content, rating, images });
      }

      setContent("");
      setError("");
      router.push("/myreviews");
    } catch (error) {
      console.error("리뷰 처리 실패:", error);
      setError("처리 중 오류가 발생했습니다.");
    }
  };

  const buttonText = mode === "write" ? "등록하기" : "수정하기";
  const pageTitle = mode === "write" ? "리뷰 작성" : "리뷰 수정";

  return (
    <Container>
      <h1 className={styles.page_title}>{pageTitle}</h1>

      <div className={styles.item_info}>
        <Image src={initialData?.productInfo?.image || "/image/perfume1.svg"} alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
        <div className={styles.name}>
          <p className={styles.brand_name}>{initialData?.productInfo?.brand || "브랜드"}</p>
          <p className={styles.product_name}>{initialData?.productInfo?.name || "향수이름"}</p>
        </div>
      </div>

      <form className={styles.write_form}>
        <div className={styles.section}>
          <label className={styles.label}>별점주기</label>
          <div>
            <StarRating rating={rating} onChange={setRating} />
          </div>
        </div>

        <hr className={styles.line} />

        <div className={styles.section}>
          <label className={styles.label}>사진 업로드</label>
          <div className={styles.review_photo}>
            <div className={styles.photo_box}>
              {[...Array(5)].map((_, index) => (
                <Image key={index} src={images[index] || "/"} alt="이미지" width={76} height={76} className={styles.photo_img} />
              ))}
            </div>
            <p className={styles.error_text}>*최대 5까지 등록 가능합니다.</p>
          </div>
        </div>

        <hr className={styles.line} />

        <div className={styles.section}>
          <label htmlFor="review_text" className={styles.label}>
            리뷰 작성
          </label>
          <textarea
            id="review_text"
            className={styles.textarea}
            placeholder="*해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적절한 내용은 삭제될 수 있습니다."
            value={content}
            onChange={(e) => {
              const value = e.target.value;
              setContent(value);

              if (value.trim().length >= 10) {
                setError("");
              }
            }}
          />
          {error && <p className={styles.error_text}>{error}</p>}
        </div>
      </form>

      <div className={styles.btn_group}>
        <CancelButton />
        <RegisterButton onClickRegister={onSubmit} buttonText={buttonText} />
      </div>
    </Container>
  );
}
