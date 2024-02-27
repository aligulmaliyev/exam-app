import { Box, Flex, Progress, Text } from "@chakra-ui/react";

type TProgressDisplayProps = {
  completed: number | string;
  time: string;
  progress: number;
};

export const ProgressDisplay = ({
  completed,
  progress,
  time,
}: TProgressDisplayProps) => {
  return (
    <>
      <Box>
        <Flex justifyContent="space-between" color="GrayText" fontSize="sm">
          <Text>{completed}% completed</Text>
          <Text>{time}</Text>
        </Flex>
        <Progress colorScheme="green" size="sm" value={progress} />
      </Box>
    </>
  );
};
