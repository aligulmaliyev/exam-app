import { Box, Checkbox, FormLabel, Radio, Text } from "@chakra-ui/react";

type TOptionProps = {
  type: "text" | "image";
  multi: boolean;
  value: string;
  name: string;
  image?: string;
  text?: string;
};

export const Option = ({
  type,
  image,
  text,
  multi,
  value,
  name,
}: TOptionProps) => {
  return (
    <FormLabel htmlFor={name} cursor="pointer">
      <Box
        display="flex"
        alignItems="center"
        gap="4"
        bg="gray.50"
        rounded="6"
        p="3"
        w="100%"
      >
        {multi ? (
          <Checkbox borderColor="gray" id={name} name={name} value={value} />
        ) : (
          <Radio borderColor="gray" id={name} name={name} value={value} />
        )}
        {type === "image" ? (
          <Box display="flex" flexDirection="column" gap="4">
            <img
              src={image}
              width="300"
              height="300"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ) : (
          <Text>{text}</Text>
        )}
      </Box>
    </FormLabel>
  );
};
