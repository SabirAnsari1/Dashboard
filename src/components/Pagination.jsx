import { Box, Button } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ totalPage, page, handlePage }) => {
  return (
    <Box display={"flex"} justifyContent={"center"} gap={"1rem"}>
      {Array(totalPage)
        .fill()
        .map((_, index) => (
          <Button
            key={index}
            onClick={() => handlePage(index + 1)}
            bg="orange"
            isDisabled={page === index + 1}
          >
            {index + 1}
          </Button>
        ))}
    </Box>
  );
};

// export const Pagination = ({ totalPage, page, handlePage }) => {
//   return (
//     <Box display={"flex"} justifyContent={"center"} gap={"1rem"}>
//       <Button
//         bg="orange"
//         onClick={() => handlePage(page - 1)}
//         isDisabled={page === 1}
//       >
//         Previous
//       </Button>
//       <Box
//         w={"4%"}
//         bg="black"
//         color={"white"}
//         fontSize={"2xl"}
//         borderRadius={"5px"}
//         display={"flex"}
//         alignItems={"center"}
//         justifyContent={"center"}
//       >
//         {page}
//       </Box>
//       <Button
//         bg="orange"
//         onClick={() => handlePage(page + 1)}
//         isDisabled={totalPage !== 12}
//       >
//         Next
//       </Button>
//     </Box>
//   );
// };
