import { create } from "zustand";

type TSidebarStore = {
  isOpenSidebar: boolean;
  setSidebar: (value: boolean) => void;
  toggleSidebar: () => void;
};

export const useSidebar = create<TSidebarStore>((set) => ({
  isOpenSidebar: true,
  setSidebar: (value: boolean) => set({ isOpenSidebar: value }),
  toggleSidebar: () =>
    set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
}));
