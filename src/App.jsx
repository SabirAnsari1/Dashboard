import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./pages/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <Box
        h={"70px"}
        display={"flex"}
        alignItems={"center"}
        bg={"black"}
        fontSize={"3xl"}
        pos={"sticky"}
        top={"0"}
        p={"0 3rem 0 3rem"}
        // color={"white"}
        zIndex={1}
      >
        <Navbar />
      </Box>
      <Box>
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
