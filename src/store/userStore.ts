import { UserState } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 타입 지정해줘야 함
const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user: { ...user } }),
      resetUser: () => set({ user: null }),
      getUser: () => get().user,
    }),
    {
      name: "user",
      partialize: (state) => ({
        token: state.user?.token.accessToken,
        userID: state.user?._id,
      }),
    }
  )
);
// const useUserStore = create(
//   persist<UserState>(
//     (set, get) => ({
//       user: null,
//       setUser: (user) => set({ user }),
//       resetUser: () => set({ user: null }),
//       getUser: () => get().user,
//     }),
//     {
//       name: "user",
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );

export default useUserStore;
