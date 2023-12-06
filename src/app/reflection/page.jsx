import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Heading, Text, Textarea, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import FinishButton from "../components/FinishButton";

export default function page() {
  return (
    <>
      <Navbar />
      <Box
        maxW="600px"
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        mb="5"
        boxShadow="lg"
      >
        <Heading size="lg">Now, let's think about these feelings!</Heading>
      </Box>
      <Box
        maxW="600px"
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.green"
        p="2"
        mt="5"
        mb="5"
        boxShadow="lg"
      >
        <Heading size="md">
          Let's write about why you're feeling this way.
        </Heading>
        <Text>Press finished when you're done</Text>
      </Box>
      <Flex gap="10px" direction="column" alignItems="center">
        <Textarea
          bg="brand.blue"
          maxWidth="600px"
          placeholder="If you’re stuck, that’s okay start by writing about your day...what happened?"
          border="none"
          boxShadow="lg"
        />
        <FinishButton />
        <Button bg="brand.yellow" maxW="600px" boxShadow="lg">
          See everything you jotted down
        </Button>
      </Flex>
      <Footer />
    </>
  );
}
