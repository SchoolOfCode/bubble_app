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

  // const [breathStage, setBreathStage] = useState("Breathe In");
  // const [iterationCount, setIterationCount] = useState(0);
  // const maxIterations = 2; 

  // // useEffect(() => {
  // //   const intervalId = setInterval(() => {
  // //     setBreathStage((prevStage) => {
  // //       switch (prevStage) {
  // //         case "Breathe In":
  // //           return "Hold";
  // //         case "Hold":
  // //           return "Breathe Out";
  // //         case "Breathe Out":
  // //           return "Hold";
  // //         default:
  // //           return "Breathe In";
  // //       }
  // //     });
  // //   }, 8000); // Adjust the interval duration as needed

  // //   // Clean up the interval when the component unmounts
  // //   return () => clearInterval(intervalId);
  // // }, []); 

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setBreathStage((prevStage) => (prevStage === "Breathe In" ? "Breathe Out" : "Breathe In"));
  //   }, 8000); // Adjust the interval duration as needed

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [maxIterations]);
 
return (
    <>
    {animationComplete ? (
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
        <Heading paddingTop="3" paddingBottom="5" as="h1" size={{ base: "xl", md: "xl", lg: "2xl" }}>
          Bubble Breathing!
        </Heading>
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
        </Heading>
            <Text className={style.breathingtext} fontSize={{ base: "xl", md: "4xl", lg: "4xl" }}>
              Breathe In
            </Text>
      <Box onAnimationEnd={handleAnimationEnd} className={style.bubble} position="relative">
      </Box>
        </Box>
      <Footer />
    </>
  )
}

export default page;
