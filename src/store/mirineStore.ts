import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface MirineItemInState {
  id: number;
  name: string;
  path: string;
  price: number;
}

export interface MirineState {
  mirine: MirineItemInState[];
  addItem: (item: MirineItemInState) => void;
  deleteItem: (item: MirineItemInState) => void;
  resetMirine: () => void;
  getMirine: () => MirineItemInState[];
}
// 타입 지정해줘야 함
const useMirineStore = create(
  persist<MirineState>(
    (set, get) => ({
      mirine: [],
      addItem: (item) => set((state) => ({ mirine: [...state.mirine, item] })),
      deleteItem: (item) => set((state) => ({ mirine: [...state.mirine.filter((i) => i.id !== item.id)] })),
      resetMirine: () => set({ mirine: [] }),
      getMirine: () => get().mirine,
    }),
    {
      name: "mirine",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useMirineStore;
