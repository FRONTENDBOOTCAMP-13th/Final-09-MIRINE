// shoppingCart
// type이 m이면 향수아이디들
// type이 p이면 향수아이디, 향수 이름, volume, quantity, price
// 미리내 페이지 구현하다보면 type이 m일때의 배열이 달라질 수 있음
export interface CartItemInStore {
  type: "m" | "p";
  content: number[] | [number, string, number, number, number];
}

export interface CartState {
  shoppingCart: CartItemInStore[];
  addItem: (item: CartItemInStore) => void;
  deleteItem: (item: CartItemInStore) => void;
  increaseItemQuantity: (item: CartItemInStore | number) => void;
  decreaseItemQuantity: (item: CartItemInStore | number) => void;
  resetShoppingCart: () => void;
  getShoppingCart: () => CartItemInStore[];
}
