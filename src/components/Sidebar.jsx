import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initCategory = searchParams.getAll("category");
  const initGender = searchParams.getAll("gender");
  const initSize = searchParams.getAll("size");
  const initOrder = searchParams.get("order");
  const [category, setCategory] = useState(initCategory || []);
  const [gender, setGender] = useState(initGender || []);
  const [size, setSize] = useState(initSize || []);
  const [order, setorder] = useState(initOrder || "");

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    newCategory.includes(value)
      ? (newCategory = newCategory.filter((el) => el !== value))
      : newCategory.push(value);

    setCategory(newCategory);
  };

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    newGender.includes(value)
      ? (newGender = newGender.filter((el) => el !== value))
      : newGender.push(value);

    setGender(newGender);
  };

  const handleSize = (e) => {
    const { value } = e.target;
    let newSize = [...size];
    newSize.includes(value)
      ? (newSize = newSize.filter((el) => el !== value))
      : newSize.push(value);

    setSize(newSize);
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setorder(value);
  };

  const queryParams = {
    category,
    gender,
    size,
  };
  order && (queryParams.order = order);

  useEffect(() => {
    setSearchParams(queryParams);
  }, [category, gender, size, order]);

  return (
    <VStack pos={"sticky"} top={"102px"} gap={"1rem"} align={"flex-start"}>
      <Box>
        <Heading size={"md"} mb={".5rem"}>
          Filter by category
        </Heading>
        <Box>
          <Checkbox
            value={"top-wear"}
            onChange={handleCategory}
            isChecked={category.includes("top-wear")}
            colorScheme="orange"
          >
            Top Wear
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"bottom-wear"}
            onChange={handleCategory}
            isChecked={category.includes("bottom-wear")}
            colorScheme="orange"
          >
            Bottom Wear
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"foot-wear"}
            onChange={handleCategory}
            isChecked={category.includes("foot-wear")}
            colorScheme="orange"
          >
            Foot Wear
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"cosmetic"}
            onChange={handleCategory}
            isChecked={category.includes("cosmetic")}
            colorScheme="orange"
          >
            Cosmetic
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"home-decor"}
            onChange={handleCategory}
            isChecked={category.includes("home-decor")}
            colorScheme="orange"
          >
            Home Decor
          </Checkbox>
        </Box>
      </Box>

      <Box>
        <Heading size={"md"} mb={".5rem"}>
          Filter by gender
        </Heading>
        <Box>
          <Checkbox
            value={"male"}
            onChange={handleGender}
            isChecked={gender.includes("male")}
            colorScheme="orange"
          >
            Men
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"female"}
            onChange={handleGender}
            isChecked={gender.includes("female")}
            colorScheme="orange"
          >
            Women
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"kids"}
            onChange={handleGender}
            isChecked={gender.includes("kids")}
            colorScheme="orange"
          >
            Kids
          </Checkbox>
        </Box>
      </Box>

      <Box>
        <Heading size={"md"} mb={".5rem"}>
          Filter by size
        </Heading>
        <Box>
          <Checkbox
            value={"s"}
            onChange={handleSize}
            isChecked={size.includes("s")}
            colorScheme="orange"
          >
            Small
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"m"}
            onChange={handleSize}
            isChecked={size.includes("m")}
            colorScheme="orange"
          >
            Medium
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"l"}
            onChange={handleSize}
            isChecked={size.includes("l")}
            colorScheme="orange"
          >
            Large
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"xl"}
            onChange={handleSize}
            isChecked={size.includes("xl")}
            colorScheme="orange"
          >
            X-Large
          </Checkbox>
        </Box>
        <Box>
          <Checkbox
            value={"xxl"}
            onChange={handleSize}
            isChecked={size.includes("xxl")}
            colorScheme="orange"
          >
            XX-Large
          </Checkbox>
        </Box>
      </Box>

      <Box>
        <Heading size={"md"} mb={".5rem"}>
          Sort by price
        </Heading>
        <Box>
          <RadioGroup defaultValue={order}>
            <Box onChange={handleSort}>
              <Radio value={"asc"} colorScheme="orange">
                Ascending
              </Radio>
              <br />
              <Radio value={"desc"} colorScheme="orange">
                Descending
              </Radio>
            </Box>
          </RadioGroup>
        </Box>
      </Box>
    </VStack>
  );
};
