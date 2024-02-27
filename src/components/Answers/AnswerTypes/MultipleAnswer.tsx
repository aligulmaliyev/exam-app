import { useMemo } from "react";
import { CheckboxGroup, Flex } from "@chakra-ui/react";

import { Option } from "../Option";
import { useAnswer } from "@/store/useAnswer";
import { shuffleArray } from "@/utils/shuffleArray";
import { TAnswersProps } from "@/types";

export const MultipleAnswer = ({
  parentId,
  answerOption,
}: TAnswersProps) => {
  const { setMultiValue } = useAnswer();

  const shuffledAnswers = useMemo(
    () => shuffleArray(answerOption.answers || []),
    [answerOption.answers]
  );

  const handleSetValue = (values: string[]) => {
    const ids = values.map((value) => value.split("-")[1]);
    setMultiValue(ids);
  };

  return (
    <CheckboxGroup
      key={parentId}
      defaultValue={[]}
      onChange={(values: string[]) => handleSetValue(values)}
    >
      <Flex gap="3" mt="6" flexDirection="column">
        {shuffledAnswers.map((item) => (
          <Option
            name={`question-${parentId}-answer-${item.id}`}
            key={item.id}
            multi={answerOption.type === "multi-select"}
            type={answerOption.answerLineType}
            value={`${parentId}-${item.id}`}
            text={item.answer}
            image={item.answer}
          />
        ))}
      </Flex>
    </CheckboxGroup>
  );
};
