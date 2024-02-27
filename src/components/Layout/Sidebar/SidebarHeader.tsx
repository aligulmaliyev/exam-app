import { useSidebar } from "@/store/useSidebar";
import { useSubjects } from "@/store/useSubjects";
import { Box, Heading, Show } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";


export const SidebarHeader = () => {
  const { isOpenSidebar, toggleSidebar } = useSidebar();
  const { selectedSubject:{name} } = useSubjects()
  return (
    <Box display="flex" flexDirection="column">
      <Show above="xl">
        <IoIosMenu fontSize="35px" cursor="pointer" onClick={toggleSidebar} />
      </Show>
      {isOpenSidebar && (
        <Heading cursor="pointer" as="h5" size="sm" mr="6" my="1">
          {name}
        </Heading>
      )}
    </Box>
  );
};
