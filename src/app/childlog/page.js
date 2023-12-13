"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, useToast, Flex, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import ListOfLogs from "../components/ListOfLogs";
import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import "./page.css";

//import the data from Supabase
//store the data as a const
//

async function arrayOfLogs() {
  const { data, error } = await supabase.from("mood").select();

  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);

    return data;
  }
}

export default function page() {
  const toast = useToast();
  const id = 'single-toast';

  const [logs, setLogs] = useState([]);
  useEffect(() => {
    arrayOfLogs().then(setLogs);
  }, []);

  setTimeout(() => {
    if (!toast.isActive(id)) {
    toast({
      id,
      position: "top",
      duration: 8000,
     isClosable: true,
      render: () => (
        <Flex justifyContent="center" textAlign="center">
          <Box color="white" p={3} bg="purple.500" borderRadius="md">
            <Text fontSize="xl" as="em">
              Hey! Here's an idea... why don't you talk to a grown-up about your thinking journey!
            </Text>
          </Box>
        </Flex>
      ),
    });
  }}, 8000);

  return (
    <>
      <Navbar />
      <Box
        maxW={{ base: "300", md: "400", lg: "600" }}
        mx="auto"
        borderRadius="20"
        textAlign="center"
        bg="brand.pink"
        p="2"
        mt="10"
        mb="5"
        boxShadow="lg"
      >
        <Heading  fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}>Your Thinking Journey</Heading>
      </Box>
      <ListOfLogs data={logs} />
      <Footer />
    </>
  );
}
