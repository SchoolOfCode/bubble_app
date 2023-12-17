import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

export default function BackgroundBox() {
  return (
        <Box
          width={[300, 400, 600]}
          height={[325, 400, 600]}
          mx="auto"
          borderRadius="20px"
          textAlign="center"
          bg="brand.pink"
          p="2"
          mt="10"
          boxShadow="lg"
          zIndex={-1}
          // css={{
          //   "@media (max-height: 720px)": {
          //     height: "60vh",
          //   },
          // }}
        ></Box>
  );
}
