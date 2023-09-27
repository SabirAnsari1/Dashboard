import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ProductsList } from "../components/ProductsList";

export const HomePage = () => {
  return (
    <Box>
      {/* 1 */}
      {/* navbar */}
      <Box
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
      </Box>
      {/* 2 */}
      <Flex p={"1rem 3rem "}>
        {/* sidebar */}
        <Box minW={"18%"} p={"1rem"}>
          <Sidebar />
        </Box>
        {/* product */}
        <Box minW={"82%"} p={"1rem"}>
          <ProductsList />
        </Box>
      </Flex>
    </Box>
  );
};
