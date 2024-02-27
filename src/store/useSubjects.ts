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
  toggleSubject: (id: number) => void;
};

export const useSubjects = create<TSubjectsStore>((set, get) => ({
  subjects: subjects,
  selectedSubjectId: null,
  expandedSubjects: null,
  setSubjects: (subjects: TSubject[]) => set({ subjects }),
  toggleSubject: (id: number) => {
    const currentSelected = get().selectedSubjectId;
    let newSelectedId: number | null = null;

    if (id !== currentSelected) newSelectedId = id;
    
    set((store) => {
      return {
        ...store,
        selectedSubjectId: newSelectedId,
      };
    });
  },
}));
