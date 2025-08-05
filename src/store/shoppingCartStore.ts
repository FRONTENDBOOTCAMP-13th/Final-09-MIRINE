import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 타입 지정해줘야 함
const useShoppingCartStore = create(
  persist<CartState>(
    (set, get) => ({
      shoppingCart: [],
      addItem: (item) => set((state) => ({ shoppingCart: [...state.shoppingCart, item] })),
      deleteItem: (item) => set((state) => ({ shoppingCart: state.shoppingCart.filter((i) => i !== item) })),
      resetShoppingCart: () => set({ shoppingCart: [] }),
      getShoppingCart: () => get().shoppingCart,
    }),
    {
      name: "shoppingCart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useShoppingCartStore;
