"use client";
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
  useBreakpointValue
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import BubbleBody from "../components/BubbleBody";

function page() {

  const bubbleSize = useBreakpointValue({ base: '350px', sm: '450px', md: '600px', lg: '600px' });

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
          <BubbleBody />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <HeadingComponent />
          {/* <BackgroundBox /> */}
          <Center>
            {/* <Box
              width={{ base: "80%" }}
              height={{ base: "100%" }}
              mx="auto"
              borderRadius="20px"
              textAlign="center"
              bg="brand.pink"
              p="2"
              mt="10"
              boxShadow="lg"
              zIndex={-1}
            > */}
            <Box
              borderRadius="20px"
              textAlign="center"
              bg="brand.pink"
              p="2"
              mt="10"
              boxShadow="lg"
              zIndex={-1}
              width={bubbleSize}
              height={bubbleSize}
            >
            <Flex flexDirection="column" textAlign="center" justifyContent="center">
              <Box className={style.textcontainer}></Box>
              <Center>
                <Box
                  onAnimationEnd={handleAnimationEnd}
                  className={style.bubble}
                ></Box>
              </Center>
            </Flex>
            </Box>
            {/* </Box> */}
          </Center>
          <Footer />
        </>
      )}
    </>
  );
}

export default page;
