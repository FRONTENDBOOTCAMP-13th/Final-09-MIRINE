import { UserInfo } from "./userInfo";

/**
 * 찜(Like) 정보
 * @property {number} _id 찜 번호(고유값)
 * @property {number} user_id 찜한 사용자 아이디
 * @property {UserInfo} user 찜한 사용자 정보
 * @property {"product"} type 찜 대상 타입 (현재는 'product'만 지원)
 * @property {number} target_id 찜 제품 아이디
 * @property {string} createdAt 생성일
 */
export interface Like {
  _id: number;
  user_id: number;
  user: UserInfo;
  type: "product";
  target_id: number;
  createdAt: string;
}
