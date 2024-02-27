import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PreQuestion = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100%"
      textAlign="center"
    >
      <Box display="flex" flexDirection="column" gap='4'>
        <Box maxW="400" maxH="400" margin="auto">
          <img width='100%' height='100%' src="/pre-question.jpeg" alt="" />
        </Box>
        <Heading>Ready for quiz</Heading>
        <Text>Test yourself on the skills in this course and earn <br />mastery points for what you already know!</Text>
        <Text as="b">10 questions • 30 - 45 minutes</Text>
        <Button m='auto' colorScheme="blue" onClick={()=>navigate('/app/question')}>Lets start</Button>
      </Box>
    </Box>
  );
};

export default PreQuestion;
