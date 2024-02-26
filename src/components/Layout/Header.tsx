import { useQuestion } from "@/store/useQuestion";
import { useSidebar } from "@/store/useSidebar";
import { Box, Button, Hide, Show, Text } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";

export const Header = () => {
  const { toggleSidebar } = useSidebar();
  const { current, questionLength } = useQuestion();
  return (
    <Box
      w="full"
      bg="white"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="2"
      px="6"
    >
      <Show above="xl">
        <span></span>
      </Show>
      <Hide above="xl">
        <IoIosMenu fontSize="35px" cursor="pointer" onClick={toggleSidebar} />
      </Hide>
      <Text w="100%" textAlign="center">
        {`${current+1} of ${questionLength}`}
      </Text>
      <Button variant="outline" fontWeight="normal" color="red">
        Leave
      </Button>
    </Box>
  );
};
