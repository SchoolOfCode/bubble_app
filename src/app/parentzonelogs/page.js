"use client";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Box, Heading, useToast, Flex, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import ListOfParentLogs from "../components/ListOfParentLogs";
import { useEffect, useState } from "react";
import { MoodDataContext } from "../context/dataforchartscontext";
import "../page.module.css";
import HeadingComponent from "../components/HeadingComponent";

//import the data from Supabase
//store the data as a const
//

export default function Page() {

  const toast = useToast();
  const id = "single-toast";

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
            <Box
              color="white"
              p={3}
              bg="blue.600"
              borderRadius="md"
              h={{ base: "120px", md: "75px" }}
            >
              <Box>
                <Box textAlign="center">
                  <Text fontSize="lg" as="em" ml="38">
                    This is a great conversation starter! Why don't you talk to your little one about their thinking journey!
                  </Text>
                </Box>
                <Button
                  onClick={() => toast.close(id)}
                  colorScheme="facebook"
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
          <ListOfParentLogs />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
