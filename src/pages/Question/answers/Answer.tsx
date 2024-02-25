import { Box, Checkbox, Radio, Text } from "@chakra-ui/react";

type TAnswerProps = {
  type: "text" | "image";
  multi: boolean;
  value: string;
  name: string;
  image?: string;
  text?: string;
};

export const Answer = ({
  type,
  image,
  text,
  multi,
  value,
  name,
}: TAnswerProps) => {

  const answerContent =
    type == "image" ? (
      <img src={image} width="100" height="100" />
    ) : (
      <Text>{text}</Text>
    );
    
  return (
    <Box
      bg="gray.100"
      rounded="6"
      display="flex"
      alignItems="center"
      p="3"
      gap="4"
    >
      {multi ? (
        <Checkbox name={name} value={value}>
          {answerContent}
        </Checkbox>
      ) : (
        <Radio name={name} value={value}>
          {answerContent}
        </Radio>
      )}
    </Box>
  );
};
