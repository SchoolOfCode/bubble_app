"use client";
import IndividualParentLog from "./IndividualParentLog";
import {
  Spinner,
  Flex,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { useContext, useState, useEffect } from "react";
import { MoodDataContext } from "../context/dataforchartscontext.js";
import supabase from "../config/supabaseClient";

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

export default function ListOfParentLogs() {
  const {
    logs,
    setLogs
  } = useContext(MoodDataContext);
  const [timeRange, setTimeRange] = useState("");
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
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Spinner m="20" size="xl" />
          <Text fontSize="2xl">Getting your child's logs...</Text>
        </Flex>
      </>
    );
  }

  let filteredArray = [...originalArray].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const currentDate = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  // let averageHappyScore = 0;
  // let averageSadScore = 0;
  // let averageAngryScore = 0;
  // let averageWorriedScore = 0;
  // let averageCheekyScore = 0;
  // let averageTiredScore = 0;

  switch (timeRange) {
    case "last7Days":
      filteredArray = filteredArray.filter(
        (item) => new Date(item.date) >= sevenDaysAgo
      );
      //happy data
      // const filteredHappyArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.happy !== undefined && item.happy !== null);
      // console.log(filteredHappyArrayLast7Days);
      // averageHappyScore =
      //   filteredHappyArrayLast7Days.length > 0
      //     ? filteredHappyArrayLast7Days.reduce(
      //         (sum, item) => sum + item.happy,
      //         0
      //       ) / filteredHappyArrayLast7Days.length
      //     : 0;
      // console.log(filteredHappyArrayLast7Days.length); // checking it filters out null entries
      // setWeekHappyData(averageHappyScore);
      // //sad data
      // const filteredSadArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.sad !== undefined && item.sad !== null);
      // averageSadScore =
      //   filteredSadArrayLast7Days.length > 0
      //     ? filteredSadArrayLast7Days.reduce((sum, item) => sum + item.sad, 0) /
      //       filteredSadArrayLast7Days.length
      //     : 0;
      // setWeekSadData(averageSadScore);
      // //angry data
      // const filteredAngryArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.angry !== undefined && item.angry !== null);
      // averageAngryScore =
      //   filteredAngryArrayLast7Days.length > 0
      //     ? filteredAngryArrayLast7Days.reduce(
      //         (sum, item) => sum + item.angry,
      //         0
      //       ) / filteredAngryArrayLast7Days.length
      //     : 0;
      // setWeekAngryData(averageAngryScore);
      // //worried data
      // const filteredWorriedArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.worried !== undefined && item.worried !== null);
      // averageWorriedScore =
      //   filteredWorriedArrayLast7Days.length > 0
      //     ? filteredWorriedArrayLast7Days.reduce(
      //         (sum, item) => sum + item.worried,
      //         0
      //       ) / filteredWorriedArrayLast7Days.length
      //     : 0;
      // setWeekWorriedData(averageWorriedScore);
      // //cheeky data
      // const filteredCheekyArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.cheeky !== undefined && item.cheeky !== null);
      // averageCheekyScore =
      //   filteredCheekyArrayLast7Days.length > 0
      //     ? filteredCheekyArrayLast7Days.reduce(
      //         (sum, item) => sum + item.cheeky,
      //         0
      //       ) / filteredCheekyArrayLast7Days.length
      //     : 0;
      // setWeekCheekyData(averageCheekyScore);
      // //tired data
      // const filteredTiredArrayLast7Days = filteredArray
      //   .filter((item) => new Date(item.date) >= sevenDaysAgo)
      //   .filter((item) => item.tired !== undefined && item.tired !== null);
      // averageTiredScore =
      //   filteredTiredArrayLast7Days.length > 0
      //     ? filteredTiredArrayLast7Days.reduce(
      //         (sum, item) => sum + item.tired,
      //         0
      //       ) / filteredTiredArrayLast7Days.length
      //     : 0;
      // setWeekTiredData(averageTiredScore);
      break;
    case "last30Days":
      filteredArray = filteredArray.filter(
        (item) => new Date(item.date) >= thirtyDaysAgo
      );
      // //happy data
      // const filteredHappyArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.happy !== undefined && item.happy !== null);
      // averageHappyScore =
      //   filteredHappyArrayLast30Days.length > 0
      //     ? filteredHappyArrayLast30Days.reduce(
      //         (sum, item) => sum + item.happy,
      //         0
      //       ) / filteredHappyArrayLast30Days.length
      //     : 0;
      // setMonthHappyData(averageHappyScore);
      // //sad data
      // const filteredSadArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.sad !== undefined && item.sad !== null);
      // averageSadScore =
      //   filteredSadArrayLast30Days.length > 0
      //     ? filteredSadArrayLast30Days.reduce(
      //         (sum, item) => sum + item.sad,
      //         0
      //       ) / filteredSadArrayLast30Days.length
      //     : 0;
      // setMonthSadData(averageSadScore);
      // //angry data
      // const filteredAngryArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.angry !== undefined && item.angry !== null);
      // averageAngryScore =
      //   filteredAngryArrayLast30Days.length > 0
      //     ? filteredAngryArrayLast30Days.reduce(
      //         (sum, item) => sum + item.angry,
      //         0
      //       ) / filteredAngryArrayLast30Days.length
      //     : 0;
      // setMonthAngryData(averageAngryScore);
      // console.log(averageAngryScore);
      // //worried data
      // const filteredWorriedArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.worried !== undefined && item.worried !== null);
      // averageWorriedScore =
      //   filteredWorriedArrayLast30Days.length > 0
      //     ? filteredWorriedArrayLast30Days.reduce(
      //         (sum, item) => sum + item.worried,
      //         0
      //       ) / filteredWorriedArrayLast30Days.length
      //     : 0;
      // setMonthWorriedData(averageWorriedScore);
      // //cheeky data
      // const filteredCheekyArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.cheeky !== undefined && item.cheeky !== null);
      // averageCheekyScore =
      //   filteredCheekyArrayLast30Days.length > 0
      //     ? filteredCheekyArrayLast30Days.reduce(
      //         (sum, item) => sum + item.cheeky,
      //         0
      //       ) / filteredCheekyArrayLast30Days.length
      //     : 0;
      // setMonthCheekyData(averageCheekyScore);
      // //tired data
      // const filteredTiredArrayLast30Days = filteredArray
      //   .filter((item) => new Date(item.date) >= thirtyDaysAgo)
      //   .filter((item) => item.tired !== undefined && item.tired !== null);
      // averageTiredScore =
      //   filteredTiredArrayLast30Days.length > 0
      //     ? filteredTiredArrayLast30Days.reduce(
      //         (sum, item) => sum + item.tired,
      //         0
      //       ) / filteredTiredArrayLast30Days.length
      //     : 0;
      // console.log(filteredTiredArrayLast30Days.length);
      // setMonthTiredData(averageTiredScore.toFixed(1));
      break;
    default:
      filteredArray;
      //all happy data
      // const allHappyDatafilteredArray = filteredArray.filter(
      //   (item) => item.happy !== undefined && item.happy !== null
      // );
      // console.log(allHappyDatafilteredArray.length); // checking it filters out null entries
      // averageHappyScore =
      //   allHappyDatafilteredArray.length > 0
      //     ? allHappyDatafilteredArray.reduce(
      //         (sum, item) => sum + item.happy,
      //         0
      //       ) / allHappyDatafilteredArray.length
      //     : 0;
      // setHappyData(averageHappyScore);
      // console.log(averageHappyScore);
      // //all sad data
      // const allSadDatafilteredArray = filteredArray.filter(
      //   (item) => item.sad !== undefined && item.sad !== null
      // );
      // averageSadScore =
      //   allSadDatafilteredArray.length > 0
      //     ? allSadDatafilteredArray.reduce((sum, item) => sum + item.sad, 0) /
      //       allSadDatafilteredArray.length
      //     : 0;
      // setSadData(averageSadScore);
      // //all angry data
      // const allAngryDatafilteredArray = filteredArray.filter(
      //   (item) => item.angry !== undefined && item.angry !== null
      // );
      // averageAngryScore =
      //   allAngryDatafilteredArray.length > 0
      //     ? allAngryDatafilteredArray.reduce(
      //         (sum, item) => sum + item.angry,
      //         0
      //       ) / allAngryDatafilteredArray.length
      //     : 0;
      // setAngryData(averageAngryScore);
      // //all cheeky data
      // const allCheekyDatafilteredArray = filteredArray.filter(
      //   (item) => item.cheeky !== undefined && item.cheeky !== null
      // );
      // averageCheekyScore =
      //   allCheekyDatafilteredArray.length > 0
      //     ? allCheekyDatafilteredArray.reduce(
      //         (sum, item) => sum + item.cheeky,
      //         0
      //       ) / allCheekyDatafilteredArray.length
      //     : 0;
      // setCheekyData(averageCheekyScore);
      // // all tired data
      // const allTiredDatafilteredArray = filteredArray.filter(
      //   (item) => item.tired !== undefined && item.tired !== null
      // );
      // averageTiredScore =
      //   allTiredDatafilteredArray.length > 0
      //     ? allTiredDatafilteredArray.reduce(
      //         (sum, item) => sum + item.tired,
      //         0
      //       ) / allTiredDatafilteredArray.length
      //     : 0;
      // setTiredData(averageTiredScore);
      // //all worried data
      // const allWorriedDatafilteredArray = filteredArray.filter(
      //   (item) => item.worried !== undefined && item.worried !== null
      // );
      // averageWorriedScore =
      //   allWorriedDatafilteredArray.length > 0
      //     ? allWorriedDatafilteredArray.reduce(
      //         (sum, item) => sum + item.worried,
      //         0
      //       ) / allWorriedDatafilteredArray.length
      //     : 0;
      // setWorriedData(averageWorriedScore);
  }

  return (
    <>
      <Flex justifyContent="center" gap="10">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab onClick={() => setTimeRange("")}>
              <Text>All</Text>
            </Tab>
            <Tab onClick={() => setTimeRange("last7Days")}>
              <Text>Last 7 days</Text>
            </Tab>
            <Tab onClick={() => setTimeRange("last30Days")}>
              <Text>Last 30 days</Text>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Flex justifyContent="center" textAlign="center">
        {/* <Box
          width={[300, 400, 600]}
          bg="brand.orange"
          borderRadius="20px"
          textAlign="center"
          boxShadow="lg"
          mt="5"
          p="2"
        >
          <Heading fontSize="lg" as="h3" p="3">
            Average Mood Scores
          </Heading>
          <Text as="em" fontSize="sm">
            This is from the &apos;dive deeper&apos; section of the app. This
            shows the average scores for the time period selected above.
          </Text>
          <SimpleGrid columns={2} p="3">
            <Text>Happy: {averageHappyScore.toFixed(1)}</Text>
            <Text>Sad: {averageSadScore.toFixed(1)}</Text>
            <Text>Angry: {averageAngryScore.toFixed(1)}</Text>
            <Text>Worried: {averageWorriedScore.toFixed(1)}</Text>
            <Text>Cheeky: {averageCheekyScore.toFixed(1)}</Text>
            <Text>Tired: {averageTiredScore.toFixed(1)}</Text>
          </SimpleGrid>
        </Box> */}
      </Flex>
      {filteredArray.map((data) => (
        <IndividualParentLog key={data.uuid} data={data} />
      ))}
    </>
  );
}
