import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";

export default function HeadingCard({ title, color, desc }) {
  return (
    <Box
      bg={color}
      p={4}
      borderRadius="20"
      mx="auto"
      boxShadow="lg"
      textAlign="center"
      mt={10}
      w={[300, 400, 600]}
    >
      <Heading size="lg">{title}</Heading>
      <Text fontSize="xl">{desc}</Text>
    </Box>
  );
}
