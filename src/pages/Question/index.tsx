import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

import { Answers } from "@/pages/Question/answers";
import { questions } from "@/data/questions";
import { useAnswer } from "@/store/useAnswer";
import { getAnswerValue } from "@/utils/getAnswerValue";
import { useQuestion } from "@/store/useQuestion";

const Question = () => {
  const { essay, multi, single, reset } = useAnswer();
  const { current, setCurrent } = useQuestion();
  // const [qIndex, setQIndex] = useState(0);
  const { questionText, answerOptions, id } = questions[current];

  const questionResponse =
    answerOptions.type == "single-select"
      ? "Single Response"
      : answerOptions.type == "multi-select"
      ? "Multiple response"
      : "Open ended";

  const answerType =
    answerOptions.type == "single-select"
      ? "SINGLE_ANSWER"
      : answerOptions.type == "multi-select"
      ? "MULTI_ANSWER"
      : "ESSAY_ANSWER";

  const nextQuestion = () => {
    let value = getAnswerValue({ essay, multi, single });
    console.log(value);
    if (questions.length > current + 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
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
          <Box fontSize='23' dangerouslySetInnerHTML={{ __html: questionText }} />
          <Divider />
          <Answers
            parentId={id}
            type={answerType}
            answerOptions={answerOptions}
          />
        </>
      </Box>
      <Button
        mt="10"
        onClick={nextQuestion}
        colorScheme="blue"
        alignSelf="end"
      >
        Submit
      </Button>
    </Flex>
  );
};

export default Question;
