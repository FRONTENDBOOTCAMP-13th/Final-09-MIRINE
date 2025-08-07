import { UserInfo } from "./userInfo";

/**
 * 리뷰 인터페이스
 * @property {number} _id 리뷰 번호(고유값)
 * @property {number} user_id 리뷰 작성자 아이디
 * @property {UserInfo} user 리뷰 작성자 상세 정보
 * @property {number} order_id 구매 번호
 * @property {number} product_id 제품 번호
 * @property {number} rating 별점
 * @property {string} content 리뷰 글
 * @property {string} createdAt 생성일
 */
export interface Review {
  _id: number;
  user_id?: number;
  user: UserInfo;
  product_id?: number;
  rating: number;
  content: string;
  createdAt: string;
}

export interface ReviewItem {
  _id: number;
  user: {
    _id: number;
    name: string;
  };
  product: {
    _id: number;
    image: { name: string; path: string };
    name: string;
  };
  content: string;
  createdAt: string;
  rating: number;
  extra: {
    type: "p" | "m";
    images: string[];
    brand: string | "미리내" | "아로마조인";
  };
}
