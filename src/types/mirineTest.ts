import { UserInfo } from "./userInfo";

/**
 * 미리내 테스트 인터페이스
 * @property {number} _id 미리내 테스트 번호(고유값)
 * @property {"post"} type 미리내 테스트 타입('post'만 사용)
 * @property {UserInfo} user 미리내 테스트를 한 사용자 정보
 * @property {MirineTestInfo} extra 미리내 테스트 상세 정보
 * @property {string} createdAt 생성일
 * @property {string} updatedAt 생성일
 */
export interface MirineTest {
  _id: number;
  type: "post";
  user: UserInfo;
  extra: MirineTestInfo;
  createdAt: string;
  updatedAt: string;
}

/**
 * 미리내 테스트 상세 정보 인터페이스
 * @property {number[]} answers 선택한 답변들
 * @property {number[]} products 결과 제품들
 */
export interface MirineTestInfo {
  answers: number[];
  products: number[];
}
