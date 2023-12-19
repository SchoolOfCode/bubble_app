"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Heading, Text, Flex, Link } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Textbox from "../components/Textbox";
import "../page.module.css";
import HeadingComponent from "../components/HeadingComponent";

export default function page() {
  return (
    <>
      <Navbar />
      <HeadingComponent />
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
        <Heading as="h2" size="md">
          Write about why you&apos;re feeling this way.
        </Heading>
        <Text>Press finish when you&apos;re done</Text>
      </Box>
      <Flex gap="10px" direction="column" alignItems="center" pb="50px">
        <Textbox />
        <Link href="/childlog" target="_self">
          <Button bg="brand.yellow" maxW="600px" boxShadow="lg" mb="10px">
            See everything you jotted down
          </Button>
        </Link>
      </Flex>
      <Footer />
    </>
  );
}
