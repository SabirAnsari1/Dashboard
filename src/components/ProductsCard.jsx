import React, { useRef } from "react";
import {
  Box,
  Heading,
  Image,
  Button,
  Text,
  Flex,
  useColorMode,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductsCard = ({
  id,
  image,
  name,
  brandName,
  price,
  discount,
  shipping,
  color,
  size,
  rating,
  fabric,
  length,
  handleDelete,
}) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <Flex
      flexDir={"column"}
      align={"center"}
      boxShadow={
        colorMode === "light"
          ? "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
          : "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
      }
      p={"1rem"}
      borderRadius={"5px"}
      gap={".5rem"}
      h={"400px"}
    >
      <Image src={image} alt={brandName} h={"50%"} />
      <Heading size={"md"}>{brandName}</Heading>
      <Text noOfLines={"2"}>{name}</Text>
      <Heading size={"lg"}>₹{price}</Heading>
      <Box display={"flex"} justifyContent={"space-between"} w={"100%"}>
        <Button bg="orange">
          <Link to={`edit-product/${id}`}>Edit</Link>
        </Button>
        {/* <Button bg="orange" onClick={() => handleDelete(id)}>
          Delete
        </Button> */}
        <Button bg="orange" onClick={onOpen}>
          Delete
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody align={"center"}>
                Are you sure? You want to delete product{" "}
                <Heading size={"lg"} display={"inline"}>
                  {id}
                </Heading>
                .
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button bg="orange" onClick={() => handleDelete(id)} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </Flex>
  );
};
