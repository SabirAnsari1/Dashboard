import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../redux/products/action";
import { ProductsCard } from "./ProductsCard";
import { Pagination } from "./Pagination";
import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  Grid,
  Stack,
  Center,
} from "@chakra-ui/react";
import { memo } from "react";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const ProductsList = memo(({ page, handlePage, handleDelete }) => {
  const { isLoading, isError, errMessage, products, totalPage } = useSelector(
    (store) => ({
      isLoading: store.productsReducer.isLoading,
      isError: store.productsReducer.isError,
      errMessage: store.productsReducer.errMessage,
      products: store.productsReducer.products,
      totalPage: store.productsReducer.totalPage,
    }),
    shallowEqual
  );

  return (
    <Box textAlign={"center"}>
      {isLoading ? (
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(4,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
          gap={"1rem"}
        >
          {skeleton?.map((el) => (
            <Stack key={el}>
              <Skeleton height="200px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
              <Skeleton height="20px" borderRadius={"5px"} />
              <Skeleton height="35px" borderRadius={"5px"} />
            </Stack>
          ))}
        </Grid>
      ) : isError ? (
        <Center>
          <Heading>{errMessage}</Heading>
        </Center>
      ) : products.length === 0 ? (
        <Center>
          <Heading>No Results Found, Please Try Again</Heading>
        </Center>
      ) : (
        <Box>
          <SimpleGrid
            display={"grid"}
            gap={"1rem"}
            columns={{
              base: "1",
              sm: "2",
              md: "3",
              lg: "4",
              xl: "4",
              "2xl": "4",
            }}
          >
            {products?.map((el) => (
              <ProductsCard key={el.id} {...el} handleDelete={handleDelete} />
            ))}
          </SimpleGrid>
          <Box mt={"2rem"}>
            <Pagination
              totalPage={Math.ceil(totalPage / 12)}
              page={page}
              handlePage={handlePage}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
});
