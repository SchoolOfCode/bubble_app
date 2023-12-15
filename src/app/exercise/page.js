import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "../breathing/page.module.css";
import HeadingComponent from "../components/HeadingComponent";
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
      <HeadingComponent />
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
            height: "65vh",
          },
        }}
      >
        {/* <Heading paddingTop="3" paddingBottom="5" as="h1" size={{ base: "xl", md: "xl", lg: "2xl" }}>
          Bubble Breathing!
        </Heading> */}
        {/* <Text fontSize={{ base: "xl", md: "4xl", lg: "4xl" }}>Breathe In</Text> */}
        <Box className={style.bubble} position="relative"></Box>
      </Box>
      <Footer />
    </>
  );
}

export default page;
