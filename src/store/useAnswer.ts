import { create } from "zustand";

type TAnswerStore = {
  multi: string[] | null;
  single: string | null;
  essay: string | null;
  setMultiValue: (value: string[]) => void;
  setSingleValue: (value: string) => void;
  setEssayValue: (value: string) => void;
  reset: () => void;
};

export const useAnswer = create<TAnswerStore>((set) => ({
  multi: null,
  single: null,
  essay: null,
  setMultiValue: (value: string[]) => set({ multi: value }),
  setSingleValue: (value: string) => set({ single: value }),
  setEssayValue: (value) => set(() => ({ essay: value })),
  reset: () => set({ essay: null, multi: null, single: null }),
}));
