import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, useColorMode, Text, Image, Center, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authentication/action";
import { FaSun, FaMoon } from "react-icons/fa";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <Box minW={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Flex justify={"center"} align={"center"} color={"white"} w={"6%"}>
        <Link to={"/"}>
          <Image src={logoDark} alt={"Home"} minW={"100%"} />
        </Link>
      </Flex>

      {/* <Box color={"white"}>
        <Link to={"/"}>Home</Link>
      </Box> */}

      <Box color={"white"}>
        <Link to={"/admin"}>Admin</Link>
      </Box>

      <Button bg={"orange"}>
        {isAuth ? <Text onClick={handleLogout}>Logout</Text> : <Link to={"/login"}>Login</Link>}
      </Button>

      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound
        onClick={toggleColorMode}
      />
    </Box>
  );
};
