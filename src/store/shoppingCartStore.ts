import { CartItemInStore, CartState } from "@/types/shoppingCart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useShoppingCartStore = create(
  persist<CartState>(
    (set, get) => ({
      shoppingCart: [],
      addItem: (item) => set((state) => ({ shoppingCart: [...state.shoppingCart, item] })),
      deleteItem: (item) => set((state) => ({ shoppingCart: state.shoppingCart.filter((i) => i !== item) })),
      increaseItemQuantity: (item) => {
        set((state) => {
          if (typeof item === "number" && state.shoppingCart[item].type === "p") {
            state.shoppingCart[item].content[3]++;
            return { shoppingCart: [...state.shoppingCart] };
          } else {
            if ((item as CartItemInStore).type === "p") {
              (item as CartItemInStore).content[3]++;
              return { shoppingCart: [...state.shoppingCart] };
            } else return { shoppingCart: state.shoppingCart };
          }
        });
      },
      decreaseItemQuantity: (item) => {
        set((state) => {
          if (typeof item === "number" && state.shoppingCart[item].type === "p") {
            state.shoppingCart[item].content[3]--;
            return { shoppingCart: [...state.shoppingCart] };
          } else {
            if ((item as CartItemInStore).type === "p") {
              (item as CartItemInStore).content[3]--;
              return { shoppingCart: [...state.shoppingCart] };
            } else return { shoppingCart: state.shoppingCart };
          }
        });
      },
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
