import { create } from "zustand";
import { subjects } from "../data/subjects";

export type TSubject = {
  id: number;
  name: string;
  completed?: boolean;
  children?: TSubject[];
};

type TSubjectsStore = {
  subjects: TSubject[];
  selectedSubjectId: number | null;
  setSubjects: (subjects: TSubject[]) => void;
  selectSubject: (id: number) => void;
};

export const useSubjects = create<TSubjectsStore>((set) => ({
  subjects: subjects,
  selectedSubjectId: null,
  setSubjects: (subjects: TSubject[]) => set({ subjects }),
  selectSubject: (id: number) => set({ selectedSubjectId: id }),
}));
