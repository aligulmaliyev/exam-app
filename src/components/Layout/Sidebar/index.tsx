import { useEffect } from "react";
import { Box, Show } from "@chakra-ui/react";

import { useSidebar } from "@/store/useSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { SidebarContent } from "./SidebarContent";

export const Sidebar = () => {
  const { isOpenSidebar, setSidebar } = useSidebar();

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
      <MobileSidebar>
        <SidebarContent />
      </MobileSidebar>

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
