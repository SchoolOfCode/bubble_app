"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Heading, Text, Flex, Link } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Textbox from "../components/Textbox";

export default function page() {
  return (
    <>
      <Navbar />
      <Box
        maxW={[350, 600]}
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        mb="5"
        boxShadow="lg"
      >
        <Heading size="lg">Now, let&apos;s think about these feelings!</Heading>
      </Box>
      <Box
        maxW={[350, 600]}
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
          Let&apos;s write about why you&apos;re feeling this way.
        </Heading>
        <Text>Press finished when you&apos;re done</Text>
      </Box>
      <Flex gap="10px" direction="column" alignItems="center">
        <Textbox />
        <Link href="/childlog">
          <Button bg="brand.yellow" maxW="600px" boxShadow="lg">
            See everything you jotted down
          </Button>
        </Link>
      </Flex>
      <Footer />
    </>
  );
}
