// import { FileUpload } from "./file";

/**
 * 구매 내역 인터페이스
 * @property {number} _id 구매 내역 번호(고유값)
 * @property {number} user_id 해당 내역 구매자 아이디
 * @property {OrderProduct[]} products 구매 제품 목록
 * @property {OrderCost} cost 구매 금액
 * @property {string} createdAt 생성일
 * @property {string} updatedAt 생성일
 */
export interface Order {
  _id: number;
  user_id: number;
  products: OrderProduct[];
  cost: OrderCost;
  createdAt: string;
  updatedAt: string;
}

/**
 * 구매 제품 인터페이스
 * @property {number} _id 구매 제품 번호
 * @property {string} name 구매 제품 이름
 * @property {number} quantity 구매 제품 개수
 * @property {number} price 구매 제품 가격
 * @property {number?} review_id 리뷰 번호, 리뷰 작성시 사용
 */

export interface OrderProduct {
  _id?: number;
  user_id: number;
  user: {
    _id: number;
    name: string;
  };
  products: { _id: number; quantity: number }[];
  review_id: number;
  cost: { total: number };
  extra: {
    type: "p" | "m";
    volume?: number;
    price?: number;
    name?: string;
    products?: {
      id: number;
      name: string;
      path: string;
      price: number;
    }[];
  };
}

/**
 * 구매 금액 인터페이스
 * - 나중에 할인이나 쿠폰 등에 의해 제품 가격과 결제 가격이 달라질 수 있어서 products도 있음
 * - 추가 구현되지 않는 한 total만 사용
 * @property {number} products 구매 제품 가격
 * @property {number} total 구매 제품 총 가격
 */
export interface OrderCost {
  // products: number;
  total: number;
}
