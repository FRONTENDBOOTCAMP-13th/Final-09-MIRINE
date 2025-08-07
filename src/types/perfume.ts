import { FileUpload } from "./file";

/**
 * 향수 인터페이스
 * @property {number} _id 제품 번호(고유값)
 * @property {number} price 미리내에 담을 때 가격
 * @property {true} show DB에 추가할 때 필수 속성
 * @property {true} active DB에 추가할 때 필수 속성
 * @property {string} name 제품 이름
 * @property {number} quantity DB에 추가할 때 필수 속성
 * @property {FileUpload} mainImages 메인 이미지 정보. FileUpload 타입 참고
 * @property {string} createdAt 생성일
 * @property {string} updatedAt 수정일
 * @property {PerfumeInfo} extra 향수 상세 정보. PerfumeInfo 타입 참고
 */
export interface Perfume {
  _id: number;
  price: number;
  show: true;
  active: true;
  name: string;
  quantity: number;
  mainImages?: FileUpload[];
  image?: { path: string };
  createdAt: string;
  updatedAt: string;
  extra: PerfumeInfo;
}

/**
 * 향수 상세 정보 인터페이스
 * @property {"woody" | "floral" | "musk" | "sweet" | "citrus"} mainAccord 메인 어코드
 * @property {string} brand 브랜드
 * @property {string} brandInitialKR 브랜드 한글 초성
 * @property {number[]} volumes 용량 배열. prices와 index로 대응함
 * @property {number[]} prices 가격 배열. volumes와 index로 대응함
 * @property {string[]} tags 태그 배열
 * @property {string} content 상품 설명(한 줄 정도)
 * @property {string} detailContent 상품 상세 설명
 */
export interface PerfumeInfo {
  mainAccord: "woody" | "floral" | "musk" | "sweet" | "citrus";
  brand: string;
  brandInitialKR: string;
  volumes: number[];
  prices: number[];
  tags: string[];
  content: string;
  detailContent: string;
}
