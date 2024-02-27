import { TAnswerOption } from "@/types";
import SingleAnswer from "./AnswerTypes/SingleAnswer";
import OpenEndedAnswer from "./AnswerTypes/OpenEndedAnswer";
import { MultipleAnswer } from "./AnswerTypes/MultipleAnswer";

const componentMap = {
  MULTI_ANSWER: MultipleAnswer,
  SINGLE_ANSWER: SingleAnswer,
  ESSAY_ANSWER: OpenEndedAnswer,
};

export const Answers = ({
  parentId,
  type,
  answerOptions,
}: {
  type: keyof typeof componentMap;
  parentId: number;
  answerOptions: TAnswerOption;
}) => {
  const Component = componentMap[type];

  return <Component parentId={parentId} answerOption={answerOptions} />;
};
