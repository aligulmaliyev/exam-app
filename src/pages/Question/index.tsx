import { useState } from "react";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import { Answers } from "@/pages/Question/answers";
import { questions } from "@/data/questions";
import { useAnswer } from "@/store/useAnswer";
import { getAnswerValue } from "@/utils/getAnswerValue";

const Question = () => {
  const { essay, multi, single, reset } = useAnswer();
  const [qIndex, setQIndex] = useState(0);
  const { questionText, answerOptions, id } = questions[qIndex];

  const questionResponse =
    answerOptions.type == "single-select"
      ? "Single Response"
      : answerOptions.type == "multi-select"
      ? "Multiple response"
      : "Essay";

  const answerType =
    answerOptions.type == "single-select"
      ? "SINGLE_ANSWER"
      : answerOptions.type == "multi-select"
      ? "MULTI_ANSWER"
      : "ESSAY_ANSWER";

  const nextQuestion = () => {
    let value = getAnswerValue({ essay, multi, single });

    console.log(value);

    if (questions.length > qIndex + 1) {
      setQIndex((prev) => prev + 1);
    } else {
      setQIndex(0);
    }
    reset();
  };

  return (
    <Flex
      w={{
        base:'90%',
        md:"70%"
      }}
      h="100%"
      pt="24"
      m="auto"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        {
          <>
            <Text
              border="1px solid"
              borderColor="gray"
              color="gray"
              display="inline-block"
              rounded="6"
              px="2"
              mb="3"
            >
              {questionResponse}
            </Text>
            <Heading mb="6">{questionText}</Heading>
            <Divider />
            <Answers
              parentId={id}
              type={answerType}
              answerOptions={answerOptions}
            />
          </>
        }
      </Box>
      <Flex justifyContent="flex-end" my="8">
        <Button onClick={nextQuestion} colorScheme="green" alignSelf="end">
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Question;
