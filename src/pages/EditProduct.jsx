import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  Input,
  Select,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { editProduct } from "../redux/products/action";

export const EditProduct = () => {
  const { id } = useParams();
  const { isLoading, isError, errMessage, products } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
    }),
    shallowEqual
  );
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setProduct(data);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    dispatch(editProduct(id, product));
  };

  return (
    <Box textAlign={"center"} mt={"3rem"}>
      {isLoading ? (
        <Heading>Updating...</Heading>
      ) : isError ? (
        <Heading color={"red"}>{errMessage}</Heading>
      ) : (
        ""
      )}
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
        <form onSubmit={handleEditProduct}>
          <Input
            type="text"
            name="image"
            placeholder="Enter image"
            defaultValue={product.image}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
          />
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            defaultValue={product.name}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
          />
          <Input
            type="text"
            name="brandName"
            placeholder="Enter brand name"
            defaultValue={product.brandName}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
          />
          <Input
            type="number"
            name="price"
            placeholder="Enter price"
            defaultValue={product.price}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
          />
          <Select
            name="category"
            defaultValue={product.category}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            <option>Select Category</option>
            <option value="top-wear">Top Wear</option>
            <option value="bottom-wear">Bottom Wear</option>
            <option value="foot-wear">Foot Wear</option>
          </Select>
          <Select
            name="gender"
            defaultValue={product.gender}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            <option>Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </Select>
          <Select
            name="size"
            defaultValue={product.size}
            onChange={handleChange}
            variant="filled"
            size="lg"
            fontWeight={"semibold"}
            mb={"1rem"}
            cursor={"pointer"}
          >
            <option>Select Size</option>
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
            <option value="xl">X-Large</option>
            <option value="xxl">XX-Large</option>
          </Select>
          <Button bg={"orange"} w={"100%"} mt={"1rem"} size="lg" type="submit">
            Edit Product
          </Button>
        </form>
      </Box>
    </Box>
  );
};

{
  /* <Heading color={"green"}>Updated Successful!!!</Heading> */
}
