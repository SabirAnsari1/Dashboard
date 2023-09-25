import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../redux/products/action";
import { ProductsCard } from "./ProductsCard";
import { Pagination } from "./Pagination";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";

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
  const [searchParams] = useSearchParams();

  const queryParams = {
    params: {
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
  }, [page, searchParams]);

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
        <Heading>Loading...</Heading>
      ) : isError ? (
        <Heading>{errMessage}</Heading>
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
