import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import ProtectedRoute from "@/routes/ProtectedRoute";

export const RootLayout = () => {
  return (
    <ProtectedRoute>
      <Box display="flex" gap="2" h="min-content">
        <Sidebar />
        <Box display="flex" flexDirection="column" gap="2" w="100%">
          <Header />
          <Box
            bg="white"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
};
