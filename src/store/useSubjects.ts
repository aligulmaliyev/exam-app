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
  expandedSubjects: number[];
  setSubjects: (subjects: TSubject[]) => void;
  toggleSubject: (id: number) => void;
  isExpandedParentSubject: (id: number) => boolean;
};

export const useSubjects = create<TSubjectsStore>((set, get) => ({
  subjects: subjects,
  selectedSubjectId: null,
  expandedSubjects: [],
  setSubjects: (subjects: TSubject[]) => set({ subjects }),
  toggleSubject: (id: number) => {
    set((store) => {
      const { expandedSubjects } = store;
      let newExpandedSubjects: number[] = [];
      if (expandedSubjects.includes(id)) {
        newExpandedSubjects = expandedSubjects.filter((item) => item != id);
      } else {
        newExpandedSubjects = [...expandedSubjects, id];
      }
      return {
        ...store,
        selectedSubjectId: id,
        expandedSubjects: newExpandedSubjects,
      };
    });
  },
  isExpandedParentSubject: (id: number) => {
    const { expandedSubjects } = get();
    return expandedSubjects.includes(id);
  },
}));
