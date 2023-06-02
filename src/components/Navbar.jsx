import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, useColorMode, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authentication/action";
import { FaSun, FaMoon } from "react-icons/fa";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
      <Box color={"white"}>
        <Link to={"/"}>Home</Link>
      </Box>

      <Box color={"white"}>
        <Link to={"/admin"}>Admin</Link>
      </Box>

      <Button bg={"orange"}>
        {isAuth ? (
          <Text onClick={handleLogout}>Logout</Text>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </Button>

      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        isRound
        onClick={toggleColorMode}
      />
    </Box>
  );
};
