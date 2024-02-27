import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

import { questions } from "@/data/questions";
import { useAnswer } from "@/store/useAnswer";
import { getAnswerValue } from "@/utils/getAnswerValue";
import { useQuestion } from "@/store/useQuestion";
import { Answers } from "@/components/Answers";
import { questionTypeMap } from "@/constants/questionTypeMap";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const { essay, multi, single, reset } = useAnswer();
  const { current, setCurrent } = useQuestion();
  const { questionText, answerOptions, id } = questions[current];

  const questionResponse = questionTypeMap[answerOptions.type]?.response;
  const answerType = questionTypeMap[answerOptions.type]?.answerType;

  const nextQuestion = () => {
    let value = getAnswerValue({ essay, multi, single });
    console.log(value);
    if (questions.length > current + 1) {
      setCurrent(current + 1);
    } else {
      navigate("/app/result");
    }
    reset();
  };

  return (
    <Flex
      w={{
        base: "90%",
        md: "70%",
      }}
      pt="24"
      m="auto"
      flexDirection="column"
    >
      <Box>
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
          <Box
            fontSize="23"
            dangerouslySetInnerHTML={{ __html: questionText }}
          />
          <Divider />
          <Answers
            parentId={id}
            type={answerType as any}
            answerOptions={answerOptions}
          />
        </>
      </Box>
      <Button my='10' onClick={nextQuestion} colorScheme="blue" alignSelf="end">
        Submit
      </Button>
    </Flex>
  );
};

export default Question;
