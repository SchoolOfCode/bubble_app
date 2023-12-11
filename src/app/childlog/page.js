"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Textbox from "../components/Textbox";
import Logretrieval from "../components/Logretrieval";

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
        <Heading size="lg">Your Thinking Journey</Heading>
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
          Let&apos;s write about why you&apos;re feeling this way.
        </Heading>
        <Text>Press finished when you&apos;re done</Text>
      </Box>
      <Logretrieval />
      <Footer />
    </>
  );
}
