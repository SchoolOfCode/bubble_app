import React from "react";
import { Text, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      alignItems="center"
      textAlign="center"
      color="brand.footer"
      position="sticky"
      bottom="0"
      left="0"
      width="100%"
      padding="5px"
    >
      <Text>© Team 11 Ltd. Fostering mindful bubbles since 2023.</Text>
    </Box>
  );
}
