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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ListOfLogs(props) {
  //   const { logs, deleteLog, editLog } = props;
  const [timeRange, setTimeRange] = useState("");
  const [averageHappy, setAverageHappy] = useState(0);
  const [averageSad, setAverageSad] = useState(0);
  const [averageAngry, setAverageAngry] = useState(0);
  const [averageWorried, setAverageWorried] = useState(0);
  const [averageCheeky, setAverageCheeky] = useState(0);
  const [averageTired, setAverageTired] = useState(0);

  const originalArray = props.data;
  console.log(props.data);
  console.log(`data in the ListOfLogs${props.data}`);

  useEffect(() => {
    calculateAverages(filteredArray);
  }, [filteredArray, timeRange]);

  const calculateAverages = (logs) => {
    if (!logs || logs.length === 0) {
      setAverageHappy(0);
      setAverageSad(0);
      setAverageAngry(0);
      setAverageWorried(0);
      setAverageCheeky(0);
      setAverageTired(0);
      return;
    }

    const count = logs.length;

    const sum = logs.reduce(
      (acc, log) => {
        acc.happy += log.happy;
        acc.sad += log.sad;
        acc.angry += log.angry;
        acc.worried += log.worried;
        acc.cheeky += log.cheeky;
        acc.tired += log.tired;
        return acc;
      },
      { happy: 0, sad: 0, angry: 0, worried: 0, cheeky: 0, tired: 0 }
    );

    setAverageHappy(sum.happy / count);
    setAverageSad(sum.sad / count);
    setAverageAngry(sum.angry / count);
    setAverageWorried(sum.worried / count);
    setAverageCheeky(sum.cheeky / count);
    setAverageTired(sum.tired / count);
  };

  if (originalArray.length < 1) {
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

  switch (timeRange) {
    case "last7Days":
      filteredArray = filteredArray.filter(
        (item) => new Date(item.date) >= sevenDaysAgo
      );
      break;
    case "last30Days":
      filteredArray = filteredArray.filter(
        (item) => new Date(item.date) >= thirtyDaysAgo
      );
      break;
    default:
      filteredArray;
      break;
  }

  // if (timeRange === "last7Days") {
  //   filteredArray = filteredArray.filter((item) => new Date(item.date) >= sevenDaysAgo);
  // } else if (timeRange === "last30Days") {
  //   filteredArray = filteredArray.filter((item) => new Date(item.date) >= thirtyDaysAgo);
  // } else if (timeRange === "") {
  //   filteredArray;
  // }

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
      <Text>Average Happy: {averageHappy.toFixed(1)}</Text>
      <Text>Average Sad: {averageSad.toFixed(1)}</Text>
      <Text>Average Angry: {averageAngry.toFixed(1)}</Text>
      <Text>Average Worried: {averageWorried.toFixed(1)}</Text>
      <Text>Average Cheeky: {averageCheeky.toFixed(1)}</Text>
      <Text>Average Tired: {averageTired.toFixed(1)}</Text>
      {filteredArray.map((data) => (
        <IndividualParentLog key={data.uuid} data={data} />
      ))}
    </>
  );
}
