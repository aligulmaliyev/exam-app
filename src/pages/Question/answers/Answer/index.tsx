import { Box, Checkbox, FormLabel, Radio, Text } from "@chakra-ui/react";

import { AnswerWrapper } from "./AnswerWrapper";

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

  const renderText = () => (
    <FormLabel htmlFor={name} cursor="pointer">
      <AnswerWrapper display="flex" >
        {multi ? (
          <Checkbox borderColor="gray" id={name} name={name} value={value} />
        ) : (
          <Radio borderColor="gray" id={name} name={name} value={value} />
        )}
        <Text>{text}</Text>
      </AnswerWrapper>
    </FormLabel>
  );

  const renderImage = () => (
    <FormLabel
      m="0"
      htmlFor={name}
    >
      <AnswerWrapper  display='flex' alignItems='center' gap='4'>
        {multi ? (
          <Checkbox borderColor="gray" name={name} id={name} value={value} />
        ) : (
          <Radio borderColor="gray" name={name} id={name} value={value} />
        )}
        <Box display='flex'flexDirection='column' gap='4'>
          <img src={image} width="300" height="300" style={{objectFit:'cover'}} />
        </Box>
      </AnswerWrapper>
    </FormLabel>
  );

  return (
    <>
      {multi
        ? type == "image"
          ? renderImage()
          : renderText()
        : type == "image"
        ? renderImage()
        : renderText()}
    </>
  );
};
