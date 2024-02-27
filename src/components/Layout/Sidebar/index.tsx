import { useEffect } from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Hide,
  Show,
} from "@chakra-ui/react";

import { useSidebar } from "@/store/useSidebar";
import { SidebarContent } from "./SidebarContent";

export const Sidebar = () => {
  const { isOpenSidebar, toggleSidebar, setSidebar } = useSidebar();

  useEffect(() => {
    if (window.innerWidth <= 1280) setSidebar(false);

    const handleResize = () => {
      if (window.innerWidth <= 1280) setSidebar(false);
      if (window.innerWidth >= 1280) setSidebar(true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
              flexDirection="column"
              display={isOpenSidebar ? "flex" : "none"}
              alignItems={isOpenSidebar ? "normal" : "center"}
              p="4"
              gap="3"
              bg="white"
            >
              <SidebarContent />
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
          <SidebarContent />
        </Box>
      </Show>
    </>
  );
};
