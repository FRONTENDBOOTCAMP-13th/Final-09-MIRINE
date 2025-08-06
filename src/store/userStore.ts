import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// 타입 지정해줘야 함
const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      resetUser: () => set({ user: null }),
      getUser: () => get(),
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
