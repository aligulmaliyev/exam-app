import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const AnswerWrapper: React.FC<PropsWithChildren & BoxProps> = ({
  children,
  ...props
}) => (
  <Box
    bg="gray.50"
    rounded="6"
    p="3"
    gap="4"
    w="100%"
    {...props}
  >
    {children}
  </Box>
);
