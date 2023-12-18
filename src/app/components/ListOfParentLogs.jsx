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
      return;
    }

    const count = logs.length;

    const sum = logs.reduce(
      (acc, log) => {
        acc.happy += log.happy;
        acc.sad += log.sad;
        return acc;
      },
      { happy: 0, sad: 0 }
    );

    setAverageHappy(Math.round(sum.happy / count));
    setAverageSad(Math.round(sum.sad / count));
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
      <Text>Average Happy: {averageHappy.toFixed(0)}</Text>
      <Text>Average Sad: {averageSad.toFixed(0)}</Text>
      {filteredArray.map((data) => (
        <IndividualParentLog key={data.uuid} data={data} />
      ))}
    </>
  );
}
