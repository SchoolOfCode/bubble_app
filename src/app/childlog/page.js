"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, useToast, Flex, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import ListOfLogs from "../components/ListOfLogs";
import supabase from "../config/supabaseClient.js";
import { MoodDataContext } from "../context/dataforchartscontext";
import { useEffect, useContext } from "react";
import "../page.module.css";
import "./page.css";
import HeadingComponent from "../components/HeadingComponent";

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

const { logs, setLogs } = useContext(MoodDataContext);

  const toast = useToast();
  const id = "single-toast";

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
          position: "top",
          duration: 8000,
          render: () => (
            <Box color="white" p={3} bg="purple.400" borderRadius="md" h={{ base: "100px", md: "75px"}}>
              <Box>
                <Box textAlign="center">
                  <Text fontSize="lg" as="em" ml="38">
                    Hey! Here's an idea... why don't you talk to a grown-up
                    about your thinking  journey!
                  </Text>
                </Box>
                <Button
                  onClick={() => toast.close(id)}
                  colorScheme="purple"
                  variant="solid"
                  size="sm"
                  position="fixed"
                  top="5"
                >
                  X
                </Button>
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

    window.addEventListener("beforeunload", cleanup);

    return () => {
      cleanup();
      window.removeEventListener("beforeunload", cleanup);
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
        p="5"
      >
        <HeadingComponent />
      </Flex>
      <Flex direction="column" align="center" justify="center" mb="5" pb="10">
        <Box>
          <ListOfLogs data={logs} />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
