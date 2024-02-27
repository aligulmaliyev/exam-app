import { useMemo } from "react";
import { Flex, RadioGroup } from "@chakra-ui/react";

import { Option } from "../Option";
import { useAnswer } from "@/store/useAnswer";
import { shuffleArray } from "@/utils/shuffleArray";
import { TAnswersProps } from "@/types";

const SingleAnswer = ({ parentId, answerOption }: TAnswersProps) => {
  const { setSingleValue } = useAnswer();

  const shuffle = useMemo(
    () => shuffleArray(answerOption.answers!),
    [answerOption.answers]
  );

  const handleSetValue = (value: string) => {
    const id = value.split("-")[1];
    setSingleValue(id);
  };

  return (
    <RadioGroup key={parentId} onChange={(value) => handleSetValue(value)}>
      <Flex gap="3" mt="6" flexDirection="column">
        {shuffle?.map((item) => (
          <Option
            name={`question-${parentId}-answer-${item.id}`}
            value={`${parentId}-${item.id}`}
            key={item?.id}
            multi={answerOption?.type == "multi-select"}
            type={answerOption?.answerLineType}
            text={item.answer}
            image={item.answer}
          />
        ))}
      </Flex>
    </RadioGroup>
  );
};

export default SingleAnswer;
