import { Box, Divider, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import { UserInfo } from "./UserInfo";
import { ProgressDisplay } from "./ProgressDisplay";
import { Fragment } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TSubject, useSubjects } from "@/store/useSubjects";
import { SidebarHeader } from "./SidebarHeader";
import { useSidebar } from "@/store/useSidebar";

export const SidebarContent = () => {
  const { isOpenSidebar } = useSidebar();
  const { subjects, selectedSubjectId, toggleSubject } = useSubjects();

  return (
    <>
      <SidebarHeader headingText="How to Budget and Forecast for Your Business" />
      {isOpenSidebar && (
        <>
          <UserInfo image="https://bit.ly/sage-adebayo" name="Ali Gulmaliyev" />
          <ProgressDisplay completed="86" progress={20} time="12m" />
          <List spacing={3}>
            {subjects?.map((subject: TSubject) => (
              <Fragment key={subject.id}>
                <ListItem>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    cursor="pointer"
                    onClick={() => toggleSubject(subject.id)}
                    mb={
                      selectedSubjectId == subject.id &&
                      subject.children?.length! > 0
                        ? 3
                        : "auto"
                    }
                  >
                    {subject?.children!?.length > 0 && (
                      <ListIcon
                        as={
                          selectedSubjectId == subject.id
                            ? IoIosArrowDown
                            : IoIosArrowForward
                        }
                        color="gray.500"
                      />
                    )}
                    <Text
                      w="100%"
                      fontWeight={
                        selectedSubjectId == subject.id ? "600" : "normal"
                      }
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      {subject.name}
                    </Text>
                    <ListIcon
                      as={RiCheckboxBlankCircleLine}
                      color={subject.completed ? "green" : "gray"}
                      fontSize="25"
                      ml="4"
                    />
                  </Box>
                  {selectedSubjectId == subject.id &&
                    subject.children?.length! > 0 && <Divider />}
                  {subject.children!?.length > 0 && (
                    <List
                      display={
                        selectedSubjectId == subject.id ? "block" : "none"
                      }
                      ml="6"
                      mt="2"
                      spacing={3}
                    >
                      {subject.children!?.map((subject: any) => (
                        <Fragment key={subject.id}>
                          <ListItem cursor="pointer">
                            <Text
                              w="100%"
                              fontWeight="400"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              whiteSpace="nowrap"
                            >
                              {subject.name}
                            </Text>
                          </ListItem>
                        </Fragment>
                      ))}
                    </List>
                  )}
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </>
      )}
    </>
  );
};
