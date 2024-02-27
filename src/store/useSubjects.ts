import { create } from "zustand";
import { subjects } from "../data/subjects";

export type TSubject = {
  id: number;
  name: string;
  completed?: boolean;
  children?: TSubject[];
};

export type TSelectedSubject = { id: number; name: string };

type TSubjectsStore = {
  subjects: TSubject[];
  selectedSubject: TSelectedSubject;
  setSubjects: (subjects: TSubject[]) => void;
  selectSubject: ({ id, name }: TSelectedSubject) => void;
};

export const useSubjects = create<TSubjectsStore>((set) => ({
  subjects: subjects,
  selectedSubject: {} as TSelectedSubject,
  setSubjects: (subjects: TSubject[]) => set({ subjects }),
  selectSubject: ({ id, name }: TSelectedSubject) =>
    set({ selectedSubject: { id, name } }),
}));
