import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../breathing/page.module.css";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Link,
  Center,
  AbsoluteCenter,
} from "@chakra-ui/react";

function page() {
  return (
    <>
      <Navbar />
      <Box
        width="80%"
        height="75vh"
        mx="auto"
        borderRadius="20px"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        boxShadow="lg"
        css={{
          "@media (max-height: 720px)": {
            height: "70vh",
          },
        }}
      >
        <Heading paddingTop="3" as="h1" size={{ base: "lg", md: "lg", lg: "xl" }}>
          Bubble Breathing!
        </Heading>
        <Box className={style.bubble} position="relative"></Box>
      </Box>
      <Footer />
    </>
  );
}

export default page;
