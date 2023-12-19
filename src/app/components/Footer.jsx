import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      // className="footer"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      color="brand.footer"
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      padding="5px"
    >
      <Box>
        <Text><strong>© Team 11 Ltd. Fostering mindful bubbles since 2023.</strong></Text>
      </Box>
    </Flex>
  );
}
