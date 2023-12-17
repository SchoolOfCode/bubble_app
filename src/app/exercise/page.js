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
import BackgroundBox from "../components/BackgroundBox";

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
            width={[300, 400, 600]}
            bg="brand.yellow"
            borderRadius="20px"
            textAlign="center"
            boxShadow="lg"
            p="2"
          >
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            Well done you are one step closer to feeling happier & calm! Why don't you record your mood now? Or better yet, talk to someone about your day!
            </Text>
          </Box>
          <Button 
          bg="brand.purple"
          boxShadow="lg"
          size="lg">
            <Link href="/emojis" target="_self">
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Record Mood
              </Text>
            </Link>
          </Button>
          <Button
          bg="brand.blue"
          boxShadow="lg"
          size="lg">
            <Link href="/exercise" target="_self">
              <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                Do it Again!
              </Text>
            </Link>
          </Button>
            </Flex>
            </Center>
      <Footer />
      </>
    ) : (
      <>
      <Navbar />
      <HeadingComponent />
      <BackgroundBox />
      <Box onAnimationEnd={handleAnimationEnd} className={style.bubble} position="absolute">
      </Box>
      <Footer />
    </>
  )
}
</>
)};

export default page;
