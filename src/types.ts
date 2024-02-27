export type TAnswerOption = {
  type: "multi-select" | "single-select" | "open-ended";
  answerLineType: "text" | "image";
  answers?:
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

export type TAnswersProps = {
  parentId: number;
  answerOption: TAnswerOption;
};