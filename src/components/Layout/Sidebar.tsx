import { Fragment, useEffect } from "react";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  Progress,
  Hide,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Show,
} from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowForward, IoIosMenu } from "react-icons/io";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

import { useSidebar } from "@/store/useSidebar";
import { useSubjects } from "@/store/useSubjects";

export const Sidebar = () => {
  const { isOpenSidebar, toggleSidebar, setSidebar } = useSidebar();
  const {
    subjects,
    selectedSubjectId,
    isExpandedParentSubject,
    toggleSubject,
  } = useSubjects();

  useEffect(() => {
    if (window.innerWidth <= 1280) setSidebar(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1280) setSidebar(false);
      if (window.innerWidth >= 1280) setSidebar(true);
    });
  }, []);

  return (
    <>
      <Hide above="xl">
        <Drawer
          placement={"left"}
          onClose={toggleSidebar}
          isOpen={isOpenSidebar}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box
              display={isOpenSidebar ? "flex" : "none"}
              flexDirection="column"
              alignItems={isOpenSidebar ? "normal" : "center"}
              p="4"
              gap="3"
              bg="white"
            >
              <SidebarContent
                isOpenSidebar={isOpenSidebar}
                subjects={subjects}
                isExpandedParentSubject={isExpandedParentSubject}
                toggleSubject={toggleSubject}
                toggleSidebar={toggleSidebar}
                selectedSubjectId={selectedSubjectId}
              />
            </Box>
          </DrawerContent>
        </Drawer>
      </Hide>

      <Show above="xl">
        <Box
          position="fixed"
          flexDirection="column"
          display={isOpenSidebar ? "flex" : "flex"}
          width={isOpenSidebar ? "300px" : "60px"}
          borderRightWidth="1px"
          height="100%"
          p="3"
          gap="3"
          bg="white"
          borderColor="black.400"
        >
          <SidebarContent
            isOpenSidebar={isOpenSidebar}
            subjects={subjects}
            isExpandedParentSubject={isExpandedParentSubject}
            toggleSubject={toggleSubject}
            toggleSidebar={toggleSidebar}
            selectedSubjectId={selectedSubjectId}
          />
        </Box>
      </Show>
    </>
  );
};

const SidebarContent = ({
  isOpenSidebar,
  toggleSidebar,
  subjects,
  isExpandedParentSubject,
  toggleSubject,
  selectedSubjectId,
}: any) => (
  <>
    <Box display="flex" flexDirection="column">
      <Show above="xl">
        <IoIosMenu fontSize="35px" cursor="pointer" onClick={toggleSidebar} />
      </Show>
      {isOpenSidebar && (
        <Heading cursor="pointer" as="h5" size="sm" mr="6" my="1">
          How to Budget and Forecast for Your Business
        </Heading>
      )}
    </Box>
    {isOpenSidebar && (
      <>
        <Flex gap="4" alignItems="center">
          <Avatar
            size="sm"
            name="Ali Gulmaliyev"
            src="https://bit.ly/sage-adebayo"
          />
          <Text fontSize="md" as="b">
            Ali Gulmaliyev
          </Text>
        </Flex>
        <Box>
          <Flex justifyContent="space-between" color="GrayText" fontSize="sm">
            <Text>86% completed</Text>
            <Text>12m</Text>
          </Flex>
          <Progress colorScheme="green" size="sm" value={20} />
        </Box>
        <Divider />
        <List spacing={3}>
          {subjects?.map((subject: any) => (
            <Fragment key={subject.id}>
              <ListItem>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  cursor="pointer"
                  onClick={() => toggleSubject(subject.id)}
                >
                  {subject?.children!?.length > 0 && (
                    <ListIcon
                      as={
                        isExpandedParentSubject(subject.id)
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
                {subject.children!?.length > 0 && (
                  <List
                    display={
                      isExpandedParentSubject(subject.id) ? "block" : "none"
                    }
                    ml="6"
                    spacing={3}
                  >
                    {subject.children!?.map((subject: any) => (
                      <Fragment key={subject.id}>
                        <ListItem>
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
