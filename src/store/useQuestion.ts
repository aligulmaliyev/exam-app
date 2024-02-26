import { questions } from "@/data/questions";
import { create } from "zustand";

type TAnswerStore = {
  current: number;
  questionLength: number;
  setCurrent: (currentIndex: number) => void;
};

export const useQuestion = create<TAnswerStore>((set) => ({
  current: 0,
  questionLength: questions.length,
  setCurrent: (currentIndex: number) => {
    set(() => ({ current: currentIndex }));
  },
}));
