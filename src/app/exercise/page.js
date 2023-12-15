"use client"
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
import { useState, useEffect } from "react";

function page() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    // Set the state to indicate that the animation has completed
    setAnimationComplete(true);
  };

 
return (
    <>
    {animationComplete ? (
      <>
      <Navbar />
      <HeadingComponent />
      <Box
        width="80%"
        height="70vh"
        mx="auto"
        borderRadius="20px"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        boxShadow="lg"
        css={{
          "@media (max-height: 720px)": {
            height: "60vh",
          },
        }}
      >
        <Center>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap="20px"
          position="absolute"
          top="35%"
        >
          <Box
            width="70%"
            bg="brand.yellow"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
            Well done you are one step closer to feeling happier & calm! Why don't you record your mood now? Or better yet, talk to someone about your day!
            </Text>
          </Box>
          <Button 
          bg="brand.purple"
          boxShadow="lg"
          size="lg">
            <Link href="/emojis" target="_self">
              <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Record Mood
              </Text>
            </Link>
          </Button>
          <Button
          bg="brand.blue"
          boxShadow="lg"
          size="lg">
            <Link href="/exercise" target="_self">
              <Text fontSize={{ base: "xs", md: "md", lg: "lg" }}>
                Do it Again!
              </Text>
            </Link>
          </Button>
            </Flex>
            </Center>
            </Box>
      <Footer />
      </>
    ) : (
      <>
      <Navbar />
      <HeadingComponent />
      <Box
        width="80%"
        height="70vh"
        mx="auto"
        borderRadius="20px"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        boxShadow="lg"
        css={{
          "@media (max-height: 720px)": {
            height: "60vh",
          },
        }}
      >
      <Box onAnimationEnd={handleAnimationEnd} className={style.bubble} position="relative">
      </Box>
        </Box>
      <Footer />
    </>
  )
}
</>
)};

export default page;
