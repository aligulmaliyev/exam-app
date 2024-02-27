import { TSelectedSubject, TSubject } from "@/store/useSubjects";
import { Accordion } from "@chakra-ui/react";
import { SidebarListItem } from "./SidebarListItem";

export const SidebarList = ({
  subjects,
  selectSubject,
}: {
  subjects: TSubject[];
  selectSubject: ({ id, name }: TSelectedSubject) => void;
}) => {
  return (
    <Accordion allowToggle>
      {subjects.map((subject) => (
        <SidebarListItem
          key={subject.id}
          subject={subject}
          selectSubject={selectSubject}
        />
      ))}
    </Accordion>
  );
};
