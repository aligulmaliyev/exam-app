import { useSidebar } from "@/store/useSidebar";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Hide,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

export const MobileSidebar: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { isOpenSidebar, toggleSidebar } = useSidebar();
  return (
    <Hide above="xl">
      <Drawer placement={"left"} onClose={toggleSidebar} isOpen={isOpenSidebar}>
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
            {children}
          </Box>
        </DrawerContent>
      </Drawer>
    </Hide>
  );
};
