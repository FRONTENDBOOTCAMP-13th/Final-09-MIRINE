/**
 * 회원 인터페이스
 * @property {number} _id 회원 번호(고유값)
 * @property {string} email 이메일
 * @property {string} password 비밀번호
 * @property {string} name 이름
 * @property {string} phone 전화번호
 * @property {string} address 주소
 * @property {"user"} type 회원 타입('user'만 사용)
 * @property {"email" | "kakao" | "google" | "naver"} loginType 로그인 방식
 * @property {string} createdAt 생성일
 * @property {string} updatedAt 수정일
 * @property {{address: AddressInfo}} extra 추가 정보(현재는 상세 주소만 있음)
 */
export interface User {
  _id: number;
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  type: "user";
  loginType: "email" | "kakao" | "google" | "naver";
  createdAt: string;
  updatedAt: string;
  token: {
    accessToken?: string;
    refreshToken?: string;
  };
  extra: {
    address: AddressInfo;
  };
}

/**
 * 주소 정보 인터페이스
 * @property {string} zipCode 우편번호
 * @property {string} mainAddress 주소
 * @property {string} detailAddress 상세 주소
 */
export interface AddressInfo {
  zipCode: string;
  mainAddress: string;
  detailAddress: string;
}

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
  getUser: () => User | null;
}
