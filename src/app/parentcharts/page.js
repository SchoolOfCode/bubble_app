"use client"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadingComponent from "../components/HeadingComponent";
import { TestChart } from "../components/TestChart";
import supabase from "../config/supabaseClient";
import { useEffect, useState, useContext } from "react";
import { MoodDataContext } from "../context/dataforchartscontext";
import { Spinner, Text, Flex } from "@chakra-ui/react";

async function arrayOfLogs() {
  const { data, error } = await supabase.from('mood').select();

  if (error) {
    console.log(error);
    return null; // Return null or handle the error as needed
  }

  if (data) {
    console.log(data);
    return data;
  }

  return null;
}

export default function Page() {
  
  const {
    logs,
    setLogs
  } = useContext(MoodDataContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const logsData = await arrayOfLogs();

      if (logsData) {
        setLogs(logsData);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setLogs]);


  const originalArray = logs;

  if (isLoading) {
    return (
      <>
      <Navbar />
      <HeadingComponent />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Spinner m="20" size="xl" />
          <Text fontSize="2xl">Getting your child's logs...</Text>
        </Flex>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <HeadingComponent />
      <TestChart originalArray={originalArray}/>
      <Footer />
    </>
  );
}
