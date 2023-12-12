//retrieve the data from child logs and pass the props down to individual log
"use client"
import IndividualLog from "./IndividualLog";
import { Spinner, Flex, Text, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

export default function ListOfLogs(props) {
  //   const { logs, deleteLog, editLog } = props;
  const [timeRange, setTimeRange] = useState("");
  
  const originalArray = props.data;
  console.log(props.data);
  console.log(`data in the ListOfLogs${props.data}`);
  if (originalArray.length < 1) {
    return (
      <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Spinner m="20" size="xl" />
        <Text fontSize="2xl">Getting your logs...</Text>
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

if (timeRange === "last7Days") {
  filteredArray = filteredArray.filter((item) => new Date(item.date) >= sevenDaysAgo);
} else if (timeRange === "last30Days") {
  filteredArray = filteredArray.filter((item) => new Date(item.date) >= thirtyDaysAgo);
} else if (timeRange === "") {
  filteredArray;
}

  return (
    <>
    <Flex justifyContent="center" gap="10">
    <Tabs variant='soft-rounded' colorScheme='green'>
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
      {filteredArray.map((data) => (
        <IndividualLog key={data.uuid} data={data} />
      ))}
    </>
  );
}
