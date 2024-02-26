import { create } from "zustand";

type TSelectedStore = {
  multiSelected: string[];
  singleSelected: string | null;
  setMultiSelected: (value: string) => void;
  setSingleSelected: (value: string) => void;
};

export const useSelected = create<TSelectedStore>((set, get) => ({
  multiSelected: [],
  singleSelected: null,
  setMultiSelected: (value: string) => {
    const selected = get().multiSelected;
    if (selected?.includes(value))
      set({ multiSelected: selected?.filter((n) => n != value) });
    else set({ multiSelected: [...selected, value] });
  },

  setSingleSelected: (value: string) => {
    const selected = get().singleSelected;
    if (selected == value) set({ singleSelected: "" });
    else set({ singleSelected: value });
  },
}));
