import { useSelected } from "@/store/useSelected";
import { Checkbox, FormLabel, Radio, Text } from "@chakra-ui/react";

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
  const { multiSelected, singleSelected, setMultiSelected, setSingleSelected } =
    useSelected();

  const isSelected = multi
    ? multiSelected?.includes(name)
    : singleSelected == name;
  const borderStyle = isSelected ? "1px solid gray" : "";

  const renderText = () => (
    <FormLabel htmlFor={name} cursor="pointer">
      <AnswerWrapper display="flex" border={borderStyle}>
        {multi ? (
          <Checkbox borderColor='gray' id={name} name={name} value={value} />
        ) : (
          <Radio id={name} name={name} value={value} />
        )}
        <Text>{text}</Text>
      </AnswerWrapper>
    </FormLabel>
  );

  const renderImage = () => (
    <>
      {multi ? (
        <Checkbox display="none" name={name} id={name} value={value} />
      ) : (
        <Radio display="none" name={name} id={name} value={value} />
      )}
      <FormLabel onClick={() => multi? setMultiSelected(name):setSingleSelected(name)} m="0" htmlFor={name}>
        <AnswerWrapper border={borderStyle}>
          <img src={image} width="100" height="100" />
        </AnswerWrapper>
      </FormLabel>
    </>
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
