import { TAnswerOption } from "@/types";

import MultiAnswer from "./answer-types/MultiAnswer";
import SingleAnswer from "./answer-types/SingleAnswer";
import EssayAnswer from "./answer-types/EssayAnswer";

const componentMap = {
  MULTI_ANSWER: MultiAnswer,
  SINGLE_ANSWER: SingleAnswer,
  ESSAY_ANSWER: EssayAnswer,
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
