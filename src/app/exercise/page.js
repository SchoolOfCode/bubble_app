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
import BubbleBody from "../components/BubbleBody";

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
      <BubbleBody />
      <Footer />
      </>
    ) : (
      <>
      <Navbar />
      <HeadingComponent />
      {/* <BackgroundBox /> */}
      <Box
          width={[300, 400, 600]}
          height={[325, 400, 510]}
          mx="auto"
          borderRadius="20px"
          textAlign="center"
          bg="brand.pink"
          p="2"
          mt="10"
          boxShadow="lg"
          zIndex={-1}
          // css={{
          //   "@media (max-height: 720px)": {
          //     height: "60vh",
          //   },
          // }}
        >
      <Box className={style.textcontainer}>
      </Box>
      <Box onAnimationEnd={handleAnimationEnd} className={style.bubble} >
      </Box>
        </Box>
      <Footer />
    </>
  )
}
</>
)};

export default page;
