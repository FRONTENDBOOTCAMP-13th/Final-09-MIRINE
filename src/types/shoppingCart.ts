// shoppingCart
// type이 m이면 향수아이디들
// type이 p이면 향수아이디, 향수 이름, volume, quantity, price

import { MirineItemInState } from "@/store/mirineStore";

export interface ProductItemInStore {
  id: number;
  name: string;
  volume: number;
  quantity: number;
  path: string;
  brand: string;
  price: number;
}

// 미리내 페이지 구현하다보면 type이 m일때의 배열이 달라질 수 있음
export interface CartItemInStore {
  type: "m" | "p";
  content: MirineItemInState[] | ProductItemInStore;
}

export interface CartState {
  shoppingCart: CartItemInStore[];
  addItem: (item: CartItemInStore) => void;
  deleteItem: (item: CartItemInStore) => void;
  increaseItemQuantity: (item: CartItemInStore) => void;
  decreaseItemQuantity: (item: CartItemInStore) => void;
  resetShoppingCart: () => void;
  getShoppingCart: () => CartItemInStore[];
}
