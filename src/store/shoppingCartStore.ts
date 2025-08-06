import { CartItemInStore, CartState } from "@/types/shoppingCart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useShoppingCartStore = create(
  persist<CartState>(
    (set, get) => ({
      shoppingCart: [],
      addItem: (item) => set((state) => ({ shoppingCart: [...state.shoppingCart, item] })),
      deleteItem: (item) => set((state) => ({ shoppingCart: state.shoppingCart.filter((i) => i !== item) })),
      // increaseItemQuantity: (item) => {
      //   set((state) => {
      //     if (typeof item === "number" && state.shoppingCart[item].type === "p") {
      //       state.shoppingCart[item].content[3]++;
      //       return { shoppingCart: [...state.shoppingCart] };
      //     } else {
      //       if ((item as CartItemInStore).type === "p") {
      //         (item as CartItemInStore).content[3]++;
      //         return { shoppingCart: [...state.shoppingCart] };
      //       } else return { shoppingCart: state.shoppingCart };
      //     }
      //   });
      // },
      increaseItemQuantity: (item) => {
        set((state) => {
          const newCart = [...state.shoppingCart];
          if (typeof item === "number" && newCart[item].type === "p") {
            const contents = [...(newCart[item].content as [number, string, number, number, number])];
            (contents as [number, string, number, number, number])[3]++; // quantity 증가
            newCart[item] = { ...newCart[item], content: contents as [number, string, number, number, number] };
            return { shoppingCart: newCart };
          } else if ((item as CartItemInStore).type === "p") {
            const index = newCart.findIndex((i) => i === item);
            if (index !== -1) {
              const contents = [...((item as CartItemInStore).content as number[])];
              (contents as [number, string, number, number, number])[3]++;
              newCart[index] = { ...newCart[index], content: contents as [number, string, number, number, number] };
              return { shoppingCart: newCart };
            }
          }
          return { shoppingCart: state.shoppingCart };
        });
      },
      // decreaseItemQuantity: (item) => {
      //   set((state) => {
      //     if (typeof item === "number" && state.shoppingCart[item].type === "p") {
      //       state.shoppingCart[item].content[3]--;
      //       return { shoppingCart: [...state.shoppingCart] };
      //     } else {
      //       if ((item as CartItemInStore).type === "p") {
      //         (item as CartItemInStore).content[3]--;
      //         return { shoppingCart: [...state.shoppingCart] };
      //       } else return { shoppingCart: state.shoppingCart };
      //     }
      //   });
      // },
      decreaseItemQuantity: (item) => {
        set((state) => {
          const newCart = [...state.shoppingCart];
          if (typeof item === "number" && newCart[item].type === "p") {
            const contents = [...(newCart[item].content as [number, string, number, number, number])];
            if ((contents as [number, string, number, number, number])[3] > 1) (contents as [number, string, number, number, number])[3]--; // quantity 감소
            newCart[item] = { ...newCart[item], content: contents as [number, string, number, number, number] };
            return { shoppingCart: newCart };
          } else if ((item as CartItemInStore).type === "p") {
            const index = newCart.findIndex((i) => i === item);
            if (index !== -1) {
              const contents = [...((item as CartItemInStore).content as number[])];
              if ((contents as [number, string, number, number, number])[3] > 1) (contents as [number, string, number, number, number])[3]--;
              newCart[index] = { ...newCart[index], content: contents as [number, string, number, number, number] };
              return { shoppingCart: newCart };
            }
          }
          return { shoppingCart: state.shoppingCart };
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
