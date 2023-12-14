"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, useToast, Flex, Text, CloseButton } from "@chakra-ui/react";
import Footer from "../components/Footer";
import ListOfLogs from "../components/ListOfLogs";
import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import "../page.module.css";

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

export default function Page() {
  const toast = useToast();
  const id = 'single-toast';
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    arrayOfLogs().then(setLogs);
  }, []);

  useEffect(() => {
    // Initialize a variable to store the timeout ID
    let timeoutId;

    // Show the toast when the component mounts
    timeoutId = setTimeout(() => {
      if (!toast.isActive(id)) {
        toast({
          id,
          position: 'top',
          duration: 8000,
          render: () => (
            <Box color="white" p={3} bg="purple.500" borderRadius="md" textAlign="center">
              <CloseButton onClick={() => toast.close(id)} />
              <Box>
                <Text fontSize="xl" as="em">
                  Hey! Here's an idea... why don't you talk to a grown-up about your thinking journey!
                </Text>
              </Box>
            </Box>
          ),
        });
      }
    }, 8000);

    // Clean up the timeout when the component unmounts or user navigates away
    const cleanup = () => {
      clearTimeout(timeoutId);
      toast.close(id);
    };

    window.addEventListener('beforeunload', cleanup);

    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
    };
  }, [toast, id]);

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="100%"
        position="relative"
        mb="2"
        pb="5"
      >
        <Box
          w="500px"
          maxW={{ base: "300px", md: "800px", lg: "800px" }}
          // mx="200px"
          borderRadius="20"
          textAlign="center"
          bg="brand.pink"
          p="2"
          mt="10"
          mb="5"
          boxShadow="lg"
          wordWrap="break-word"
          overflow="hidden"
        >
          <Heading fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }}>
            Your Thinking Journey
          </Heading>
        </Box>

        <ListOfLogs data={logs} />
      </Flex>

      <Footer />
    </>
  );
}
