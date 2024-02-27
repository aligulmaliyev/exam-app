import { TSubject } from "@/store/useSubjects";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { SidebarList } from "./SidebarList";

export const SidebarListItem = ({
  subject,
  selectSubject,
}: {
  subject: TSubject;
  selectSubject: (id: number) => void;
}) => {
  const handleClick = () => {
    selectSubject(subject.id);
  };

  return (
    <AccordionItem key={subject.id}>
      <AccordionButton
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={handleClick}
      >
        <Box display="flex" alignItems="center" gap="2">
          {subject.children?.length! > 0 && <AccordionIcon />}
          <Box>
            {subject.name.length > 25
              ? subject.name.slice(0, 25) + "..."
              : subject.name}
          </Box>
        </Box>
        <AccordionIcon
          as={RiCheckboxBlankCircleLine}
          color={subject.completed ? "green" : "gray"}
        />
      </AccordionButton>
      {subject.children?.length! > 0 && (
        <AccordionPanel pb={0} pl={0} pr={0}>
          <SidebarList
            subjects={subject.children!}
            selectSubject={selectSubject}
          />
        </AccordionPanel>
      )}
    </AccordionItem>
  );
};
