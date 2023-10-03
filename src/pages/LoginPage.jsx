import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authentication/action";
import {
  Box,
  Heading,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  IconButton,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, errMessage, isAuth, isLogout } = useSelector(
    (store) => ({
      isLoading: store.authReducer.isLoading,
      isError: store.authReducer.isError,
      errMessage: store.authReducer.errMessage,
      isAuth: store.authReducer.isAuth,
      isLogout: store.authReducer.isLogout,
    }),
    shallowEqual
  );
  const [show, setShow] = useState(false);
  const loction = useLocation();
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user)).then((res) => {
      navigate(loction.state, { replace: true });
    });
    setEmail("");
    setPassword("");
  };

  // useEffect(() => {
  //   isAuth && navigate(loction.state, { replace: true });
  // }, [isAuth]);

  useEffect(() => {
    {
      isLoading
        ? toast({
            title: `Loading...`,
            status: "loading",
            isClosable: true,
            position: "top",
            duration: 500,
          })
        : isError
        ? toast({
            title: `${errMessage}`,
            status: "error",
            isClosable: true,
            position: "top",
            duration: 2000,
          })
        : isAuth
        ? toast({
            title: `Login Successfull`,
            status: "success",
            isClosable: true,
            position: "top",
            duration: 1000,
          })
        : "";
    }
  }, [isLoading, isError, isAuth]);

  return (
    <Box textAlign={"center"}>
      <Box pos={"sticky"} top={"0"} zIndex={1}>
        <Navbar />
      </Box>

      <Box
        mt={"3rem"}
        boxShadow={
          colorMode === "light"
            ? "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
            : "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
        }
        p={"3rem"}
        w={"40%"}
        m={"3rem auto"}
        borderRadius={"5px"}
      >
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
          />
          <InputGroup size="lg">
            <Input
              type={show ? "text" : "password"}
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={"1rem"}
              variant="filled"
              fontWeight={"semibold"}
            />
            <InputRightElement>
              <Box onClick={() => setShow((prev) => !prev)}>
                {show ? (
                  <IconButton icon={<FaRegEyeSlash />} />
                ) : (
                  <IconButton icon={<FaRegEye />} />
                )}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Button
            isDisabled={isAuth}
            bg={"orange"}
            w={"100%"}
            mt={"1rem"}
            size="lg"
            type="submit"
            _hover={{
              bg: "orange",
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
