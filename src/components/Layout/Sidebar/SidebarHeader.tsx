import { useSidebar } from "@/store/useSidebar";
import { Box, Heading, Show } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";

type TSidebarHeaderProps = {
  headingText: string;
};

export const SidebarHeader = ({ headingText }: TSidebarHeaderProps) => {
  const { isOpenSidebar, toggleSidebar } = useSidebar();
  return (
    <Box display="flex" flexDirection="column">
      <Show above="xl">
        <IoIosMenu fontSize="35px" cursor="pointer" onClick={toggleSidebar} />
      </Show>
      {isOpenSidebar && (
        <Heading cursor="pointer" as="h5" size="sm" mr="6" my="1">
          {headingText}
        </Heading>
      )}
    </Box>
  );
};
