import { Box, Checkbox, FormLabel, Radio, Text } from "@chakra-ui/react";
import { useState } from "react";

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
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelected = (val: string) => {
    if (selected?.includes(val))
      setSelected((prev) => prev?.filter((n) => n != val));
    else setSelected((prev) => [...prev, val]);
  };

  return (
    <Box
      bg="gray.100"
      rounded="6"
      display="flex"
      alignItems="center"
      p="3"
      gap="4"
      border={selected?.includes(name) ? "1px solid gray" : ""}
    >
      {multi ? (
        type == "image" ? (
          <>
            <Checkbox display="none" name={name} id={name} value={value} />
            <FormLabel
              onClick={() => toggleSelected(name)}
              m="0"
              htmlFor={name}
            >
              <img src={image} width="100" height="100" />
            </FormLabel>
          </>
        ) : (
          <Checkbox name={name} value={value}>
            <Text>{text}</Text>
          </Checkbox>
        )
      ) : (
        // type == "image" ? (
        //   <>
        //     <Radio display="none" name={name} id={name} value={value} />
        //     <FormLabel
        //       onClick={() => toggleSingleSelected(name)}
        //       m="0"
        //       htmlFor={name}
        //     >
        //       <img src={image} width="100" height="100" />
        //     </FormLabel>
        //   </>
        // ) : (
        //   <Radio name={name} value={value}>
        //     <Text>{text}</Text>
        //   </Radio>
        // )
        <Radio name={name} value={value}>
          {type == "image" ? (
            <img src={image} width="100" height="100" />
          ) : (
            <Text>{text}</Text>
          )}
        </Radio>
      )}
    </Box>
  );
};
