import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ProductsList } from "../components/ProductsList";
import { getProducts, deleteProduct } from "../redux/products/action";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const products = useSelector((store) => store.productsReducer.products);

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
  }, [page, searchParams]);

  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(getProducts(queryParams));
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

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
    <Box>
      {/* 1 */}
      {/* navbar */}

      <Box pos={"sticky"} top={"0"} zIndex={1}>
        <Navbar query={query} setQuery={setQuery} />
      </Box>
      {/* 2 */}
      <Flex p={"1rem 3rem "}>
        {/* sidebar */}
        <Box minW={"18%"} p={"1rem"}>
          <Sidebar />
        </Box>
        {/* product */}
        <Box minW={"82%"} p={"1rem"}>
          <ProductsList
            page={page}
            handlePage={handlePage}
            handleDelete={handleDelete}
          />
        </Box>
      </Flex>
    </Box>
  );
};
