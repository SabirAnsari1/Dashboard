import { Navbar } from "./components/Navbar";
import { AllRoutes } from "./pages/AllRoutes";
import { useColorModeValue, Box } from "@chakra-ui/react";
function App() {
  const bgColor = useColorModeValue("white", "black");
  const color = useColorModeValue("black", "white");

  return (
    // <Box bgColor={bgColor} color={color}>
    <Box>
      {/* <Box
        h={"70px"}
        display={"flex"}
        alignItems={"center"}
        bg={"black"}
        fontSize={"3xl"}
        pos={"sticky"}
        top={"0"}
        p={"0 3rem 0 3rem"}
        zIndex={1}
      >
        <Navbar />
      </Box> */}
      <Box>
        <AllRoutes />
      </Box>
    </Box>
  );
}

export default App;
