import React from "react";
import { ProductsList } from "../components/ProductsList";
import { Sidebar } from "../components/Sidebar";
import { Box, Flex } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Flex p={"1rem 3rem "}>
      <Box minW={"18%"} p={"1rem"}>
        <Sidebar />
      </Box>
      <Box minW={"82%"} p={"1rem"}>
        <ProductsList />
      </Box>
    </Flex>
  );
};
