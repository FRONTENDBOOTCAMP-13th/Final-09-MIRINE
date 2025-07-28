import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 타입 지정해줘야 함
const useMirineStore = create(
  persist(
    (set, get) => ({
      mirine: [],
      addItem: (item) => set((state) => ({ mirine: [...state.mirine, item] })),
      deleteItem: (item) => set((state) => ({ mirine: state.mirine.filter((i) => i !== item) })),
      resetMirine: () => set({ mirine: [] }),
      getMirine: () => get().mirine,
    }),
    {
      name: "mirine",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
