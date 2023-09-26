import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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
import { useSearchParams } from "react-router-dom";
import { memo } from "react";
import { Navbar } from "./Navbar";

const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const ProductsList = memo(() => {
  const dispatch = useDispatch();
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
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();

  const queryParams = {
    params: {
      q: query && query,
      _limit: limit,
      _page: page,
      category: searchParams.getAll("category"),
      gender: searchParams.getAll("gender"),
      size: searchParams.getAll("size"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };

  useEffect(() => {
    dispatch(getProducts(queryParams));
  }, [query, page, searchParams]);

  useEffect(() => {
    if (products.length === 0 && page > 1) {
      setPage(1);
    }
  }, [products]);

  const handlePage = (pgno) => {
    setPage(pgno);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then((res) => {
      dispatch(getProducts(queryParams));
    });
  };

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
            "2xl": "repeat(5,1fr)",
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
