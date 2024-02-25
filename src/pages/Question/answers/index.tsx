import { TAnswerOption } from "@/types";
import React from "react";

const componentMap = {
  MULTI_ANSWER: React.lazy(() => import("./answer-types/MultiAnswer")),
  SINGLE_ANSWER: React.lazy(() => import("./answer-types/SingleAnswer")),
  ESSAY_ANSWER: React.lazy(() => import("./answer-types/EssayAnswer")),
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
