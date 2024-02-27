import { useAnswer } from "@/store/useAnswer";
import { Flex, Textarea } from "@chakra-ui/react";

const OpenEndedAnswer = () => {
  const { setEssayValue } = useAnswer();
  return (
    <Flex flexDirection="column" gap="3" mt="6" overflow="auto">
      <Textarea
        onCut={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onPaste={(e) => e.preventDefault()}
        onChange={(e) => setEssayValue(e.target.value)}
        fontSize="22"
      />
    </Flex>
  );
};

export default OpenEndedAnswer;
