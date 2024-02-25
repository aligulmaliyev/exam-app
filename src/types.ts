export type TAnswerOption = {
  type: "multi-select" | "single-select" | "essay";
  answerLineType: "text" | "image";
  answers:
    | {
        id: number;
        answer: string;
      }[]
    | null;
};

export type TQuestions = {
  id: number;
  questionText: string;
  answerOptions: TAnswerOption;
};

