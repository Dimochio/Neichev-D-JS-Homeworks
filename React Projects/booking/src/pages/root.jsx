import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Box } from "@chakra-ui/react";

function Root() {
  return (
    <>
      <Header />
      <Box
        sx={{
          flex: "1 1 auto",
          padding: 3,
          paddingTop: "85px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Root;
