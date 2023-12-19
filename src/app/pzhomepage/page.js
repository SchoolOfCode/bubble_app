"use client"
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadingComponent from "../components/HeadingComponent";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import Link from "next/link";
import supabase from "../config/supabaseClient.js";
import { MoodDataContext } from "../context/dataforchartscontext";

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

  const { setLogs } = useContext(MoodDataContext);

  useEffect(() => {
    arrayOfLogs().then(setLogs);
  }, []);


  return (
    <>
      <Navbar />
      <HeadingComponent />
      <Flex
        justify="center"
        alignItems="center"
        direction="row"
        mt="20"
        gap="10"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
      >
        <Link href="/parentzonelogs" target="_self">
          <Button
            bg="brand.purple"
            size={{ base: "lg", md: "lg", lg: "lg" }}
            w={{ base: "180px", md: "250px", lg: "300px" }}
            h={{ base: "50px", md: "100px", lg: "100px" }}
            boxShadow="lg"
          >
            <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              Reflection History
            </Text>
          </Button>
        </Link>
        <Link href="/parentcharts" target="_self">
          <Button
            bg="brand.green"
            size={{ base: "lg", md: "lg", lg: "lg" }}
            w={{ base: "180px", md: "250px", lg: "300px" }}
            h={{ base: "50px", md: "100px", lg: "100px" }}
            boxShadow="lg"
          >
            <Text fontSize={{ base: "lg", md: "2xl", lg: "2xl" }}>
              Mood Analytics
            </Text>
          </Button>
        </Link>
      </Flex>
      <Footer />
    </>
  );
}
