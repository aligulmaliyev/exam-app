import { CheckboxGroup, Flex } from "@chakra-ui/react";

import { Answer } from "../Answer";
import { TAnswerOption } from "@/types";
import { useAnswer } from "@/store/useAnswer";
import { shuffleArray } from "@/utils/shuffleArray";
import { useMemo } from "react";

const MultiAnswer = ({
  parentId,
  answerOption,
}: {
  parentId: number;
  answerOption: TAnswerOption;
}) => {
  const { setMultiValue } = useAnswer();

  const shuffle = useMemo(
    () => shuffleArray(answerOption.answers!),
    [answerOption.answers]
  );

  const handleSetValue = (values: string[]) => {
    const ids = values.map((value) => value.split("-")[1]);
    setMultiValue(ids);
  };

  return (
    <CheckboxGroup key={parentId} defaultValue={[]} onChange={(values: string[]) => handleSetValue(values)}>
      <Flex
        gap="3"
        mt="6"
        flexDirection="column"
      >
        {shuffle?.map((item) => (
          <Answer
            name={`question-${parentId}-answer-${item.id}`}
            key={item?.id}
            multi={answerOption?.type == "multi-select"}
            type={answerOption?.answerLineType}
            value={`${parentId}-${item.id}`}
            text={item.answer}
            image={item.answer}
          />
        ))}
      </Flex>
    </CheckboxGroup>
  );
};

export default MultiAnswer;
