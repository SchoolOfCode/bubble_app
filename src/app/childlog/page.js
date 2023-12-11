"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button, Heading, Text, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Textbox from "../components/Textbox";
import Listoflogs from "../components/Listoflogs";
import supabase from "../config/supabaseClient.js";
import { useEffect } from "react";

//import the data from Supabase
//store the data as a const
//

async function arrayOfLogs() {
  const { data, error } = await supabase
    .from("mood")
    .select();

  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
   
    return data
  }
}



export default function page() {
  useEffect(() => {
    arrayOfLogs();
  }, []);
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
      <Listoflogs data={data} />
      <Footer />
    </>
  );
}
