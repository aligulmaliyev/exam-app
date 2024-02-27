import { Box, Heading, Text } from "@chakra-ui/react";

const Result = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100%"
      textAlign="center"
    >
      <Box display="flex" flexDirection="column" gap="4">
        <Box maxW="120" maxH="120" margin="auto">
          <img width="100%" height="100%" src="/success.png" alt="" />
        </Box>
        <Heading>Successfully</Heading>
        <Text>
          Test yourself on the skills in this course and earn <br />
          mastery points for what you already know!
        </Text>
        <Text as="b">Your score 84%</Text>
      </Box>
    </Box>
  );
};

export default Result;
