"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewWriteEdit from "@/components/pages/Mypage/ReviewWriteEdit/ReviewWriteEdit";
import { getMyReivews } from "@/lib/function";

interface ReviewData {
  content: string;
  rating: number;
  images: string[];
  productInfo: {
    brand: string;
    name: string;
    image: string;
  };
}

interface Review {
  _id: string;
  content: string;
  rating: number;
  images: string[];
  product: {
    _id: string;
    brand: string;
    name: string;
    image: string;
  };
}

interface ApiResponse {
  item: Review[];
}

export default function ReviewEditPage() {
  const params = useParams();
  const reviewId = params.id as string;
  const [initialData, setInitialData] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviewData();
  }, [reviewId]);

  const fetchReviewData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("accessToken");

      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }

      const response: ApiResponse = await getMyReivews(token);

      if (!response || !response.item) {
        throw new Error("리뷰 데이터를 가져올 수 없습니다.");
      }

      const targetReview = response.item.find((review: Review) => review._id === reviewId);

      if (!targetReview) {
        throw new Error("해당 리뷰를 찾을 수 없습니다.");
      }

      setInitialData({
        content: targetReview.content,
        rating: targetReview.rating,
        images: targetReview.images || [],
        productInfo: {
          brand: targetReview.product.brand,
          name: targetReview.product.name,
          image: targetReview.product.image,
        },
      });
    } catch (error) {
      console.error("리뷰 데이터 로드 실패:", error);
      setError(error instanceof Error ? error.message : "데이터를 불러올 수 없습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ padding: "20px", textAlign: "center" }}>로딩 중...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", textAlign: "center", color: "red" }}>{error}</div>;
  }

  if (!initialData) {
    return <div style={{ padding: "20px", textAlign: "center" }}>데이터를 불러올 수 없습니다.</div>;
  }

  return <ReviewWriteEdit mode="edit" reviewId={reviewId} initialData={initialData} />;
}
