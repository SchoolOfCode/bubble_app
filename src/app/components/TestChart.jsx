"use client"
import React, { useContext, useState, useEffect } from 'react';
import { Box, Center, Flex, Text, Tab, Tabs, Spinner, TabList, SimpleGrid, Heading, useMediaQuery } from '@chakra-ui/react';
import { MoodDataContext } from '../context/dataforchartscontext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../page.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function TestChart({ originalArray }) {

  const isSmallScreen = window.innerHeight <= 780;
  
  const {
    setHappyData,
    setSadData,
    setCheekyData,
    setTiredData,
    setWorriedData,
    setAngryData,
    happyData,
    sadData,
    cheekyData,
    tiredData,
    worriedData,
    angryData,
  } = useContext(MoodDataContext);

  const [selectedTab, setSelectedTab] = useState("all");

  const [chartData, setChartData] = useState({
    labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
    datasets: [
      {
        label: `# - Count of Emotions (${selectedTab})`,
        data: [happyData, sadData, cheekyData, tiredData, worriedData, angryData],
        backgroundColor: [
          'rgba(156, 214, 187, 0.8)',
          'rgb(192, 185, 221, 0.8)',
          'rgb(240, 218, 162, 0.8)',
          'rgb(242, 206, 186, 0.8)',
          'rgb(162, 193, 240, 0.8)',
          'rgb(242, 186, 201, 0.8)',
        ],
        borderColor: [
          'rgba(156, 214, 187, 1)',
          'rgb(192, 185, 221, 1)',
          'rgb(240, 218, 162, 1)',
          'rgb(242, 206, 186, 1)',
          'rgb(162, 193, 240, 1)',
          'rgb(242, 186, 201, 1)',
        ],
        borderWidth: 3,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'black',
          boxWidth: 10,
        },
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    // Perform data filtering and calculation here
    [...originalArray].sort((a, b) => new Date(b.date) - new Date(a.date));

    // ... (rest of the data processing logic)

    // Set initial data for the chart
    setChartData({
      labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
      datasets: [
        {
          label: `# - Count of Emotions (${selectedTab})`,
          data: [happyData, sadData, cheekyData, tiredData, worriedData, angryData],
          backgroundColor: [
            'rgba(156, 214, 187, 0.8)',
            'rgb(192, 185, 221, 0.8)',
            'rgb(240, 218, 162, 0.8)',
            'rgb(242, 206, 186, 0.8)',
            'rgb(162, 193, 240, 0.8)',
            'rgb(242, 186, 201, 0.8)',
          ],
          borderColor: [
            'rgba(156, 214, 187, 1)',
            'rgb(192, 185, 221, 1)',
            'rgb(240, 218, 162, 1)',
            'rgb(242, 206, 186, 1)',
            'rgb(162, 193, 240, 1)',
            'rgb(242, 186, 201, 1)',
          ],
          borderWidth: 3,
        },
      ],
    });
  }, [originalArray, happyData, sadData, cheekyData, tiredData, worriedData, angryData, selectedTab]);

  useEffect(() => {
    updateDataForTab(selectedTab);
  }, [selectedTab]);

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

  let averageHappyScore = 0;
  let averageSadScore = 0;
  let averageAngryScore = 0;
  let averageWorriedScore = 0;
  let averageCheekyScore = 0;
  let averageTiredScore = 0;

  function updateDataForTab(tab) {
    let newData;

    switch (tab) {
      case "last 7 Days":
        filteredArray = filteredArray.filter(
          (item) => new Date(item.date) >= sevenDaysAgo
        );
        //happy data
        const filteredHappyArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.happy !== undefined && item.happy !== null);
        console.log(filteredHappyArrayLast7Days);
        averageHappyScore =
          filteredHappyArrayLast7Days.length > 0
            ? filteredHappyArrayLast7Days.reduce(
                (sum, item) => sum + item.happy,
                0
              ) / filteredHappyArrayLast7Days.length
            : 0;
        console.log(filteredHappyArrayLast7Days.length); // checking it filters out null entries
        setHappyData(averageHappyScore);
        //sad data
        const filteredSadArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.sad !== undefined && item.sad !== null);
        averageSadScore =
          filteredSadArrayLast7Days.length > 0
            ? filteredSadArrayLast7Days.reduce((sum, item) => sum + item.sad, 0) /
              filteredSadArrayLast7Days.length
            : 0;
        setSadData(averageSadScore);
        //angry data
        const filteredAngryArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.angry !== undefined && item.angry !== null);
        averageAngryScore =
          filteredAngryArrayLast7Days.length > 0
            ? filteredAngryArrayLast7Days.reduce(
                (sum, item) => sum + item.angry,
                0
              ) / filteredAngryArrayLast7Days.length
            : 0;
        setAngryData(averageAngryScore);
        //worried data
        const filteredWorriedArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.worried !== undefined && item.worried !== null);
        averageWorriedScore =
          filteredWorriedArrayLast7Days.length > 0
            ? filteredWorriedArrayLast7Days.reduce(
                (sum, item) => sum + item.worried,
                0
              ) / filteredWorriedArrayLast7Days.length
            : 0;
        setWorriedData(averageWorriedScore);
        //cheeky data
        const filteredCheekyArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.cheeky !== undefined && item.cheeky !== null);
        averageCheekyScore =
          filteredCheekyArrayLast7Days.length > 0
            ? filteredCheekyArrayLast7Days.reduce(
                (sum, item) => sum + item.cheeky,
                0
              ) / filteredCheekyArrayLast7Days.length
            : 0;
        setCheekyData(averageCheekyScore);
        //tired data
        const filteredTiredArrayLast7Days = filteredArray
          .filter((item) => new Date(item.date) >= sevenDaysAgo)
          .filter((item) => item.tired !== undefined && item.tired !== null);
        averageTiredScore =
          filteredTiredArrayLast7Days.length > 0
            ? filteredTiredArrayLast7Days.reduce(
                (sum, item) => sum + item.tired,
                0
              ) / filteredTiredArrayLast7Days.length
            : 0;
        setTiredData(averageTiredScore);
        newData = [happyData, sadData, cheekyData, tiredData, worriedData, angryData];
        break;
      case "last 30 Days":
        filteredArray = filteredArray.filter(
          (item) => new Date(item.date) >= thirtyDaysAgo
        );
        //happy data
        const filteredHappyArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.happy !== undefined && item.happy !== null);
        averageHappyScore =
          filteredHappyArrayLast30Days.length > 0
            ? filteredHappyArrayLast30Days.reduce(
                (sum, item) => sum + item.happy,
                0
              ) / filteredHappyArrayLast30Days.length
            : 0;
        setHappyData(averageHappyScore);
        //sad data
        const filteredSadArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.sad !== undefined && item.sad !== null);
        averageSadScore =
          filteredSadArrayLast30Days.length > 0
            ? filteredSadArrayLast30Days.reduce(
                (sum, item) => sum + item.sad,
                0
              ) / filteredSadArrayLast30Days.length
            : 0;
        setSadData(averageSadScore);
        //angry data
        const filteredAngryArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.angry !== undefined && item.angry !== null);
        averageAngryScore =
          filteredAngryArrayLast30Days.length > 0
            ? filteredAngryArrayLast30Days.reduce(
                (sum, item) => sum + item.angry,
                0
              ) / filteredAngryArrayLast30Days.length
            : 0;
        setAngryData(averageAngryScore);
        console.log(averageAngryScore);
        //worried data
        const filteredWorriedArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.worried !== undefined && item.worried !== null);
        averageWorriedScore =
          filteredWorriedArrayLast30Days.length > 0
            ? filteredWorriedArrayLast30Days.reduce(
                (sum, item) => sum + item.worried,
                0
              ) / filteredWorriedArrayLast30Days.length
            : 0;
        setWorriedData(averageWorriedScore);
        //cheeky data
        const filteredCheekyArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.cheeky !== undefined && item.cheeky !== null);
        averageCheekyScore =
          filteredCheekyArrayLast30Days.length > 0
            ? filteredCheekyArrayLast30Days.reduce(
                (sum, item) => sum + item.cheeky,
                0
              ) / filteredCheekyArrayLast30Days.length
            : 0;
        setCheekyData(averageCheekyScore);
        //tired data
        const filteredTiredArrayLast30Days = filteredArray
          .filter((item) => new Date(item.date) >= thirtyDaysAgo)
          .filter((item) => item.tired !== undefined && item.tired !== null);
        averageTiredScore =
          filteredTiredArrayLast30Days.length > 0
            ? filteredTiredArrayLast30Days.reduce(
                (sum, item) => sum + item.tired,
                0
              ) / filteredTiredArrayLast30Days.length
            : 0;
        console.log(filteredTiredArrayLast30Days.length);
        setTiredData(averageTiredScore.toFixed(1));
        newData = [happyData, sadData, cheekyData, tiredData, worriedData, angryData];
        break;
      default:
        filteredArray;
        //all happy data
        const allHappyDatafilteredArray = filteredArray.filter(
          (item) => item.happy !== undefined && item.happy !== null
        );
        console.log(allHappyDatafilteredArray.length); // checking it filters out null entries
        averageHappyScore =
          allHappyDatafilteredArray.length > 0
            ? allHappyDatafilteredArray.reduce(
                (sum, item) => sum + item.happy,
                0
              ) / allHappyDatafilteredArray.length
            : 0;
        setHappyData(averageHappyScore);
        console.log(averageHappyScore);
        //all sad data
        const allSadDatafilteredArray = filteredArray.filter(
          (item) => item.sad !== undefined && item.sad !== null
        );
        averageSadScore =
          allSadDatafilteredArray.length > 0
            ? allSadDatafilteredArray.reduce((sum, item) => sum + item.sad, 0) /
              allSadDatafilteredArray.length
            : 0;
        setSadData(averageSadScore);
        //all angry data
        const allAngryDatafilteredArray = filteredArray.filter(
          (item) => item.angry !== undefined && item.angry !== null
        );
        averageAngryScore =
          allAngryDatafilteredArray.length > 0
            ? allAngryDatafilteredArray.reduce(
                (sum, item) => sum + item.angry,
                0
              ) / allAngryDatafilteredArray.length
            : 0;
        setAngryData(averageAngryScore);
        //all cheeky data
        const allCheekyDatafilteredArray = filteredArray.filter(
          (item) => item.cheeky !== undefined && item.cheeky !== null
        );
        averageCheekyScore =
          allCheekyDatafilteredArray.length > 0
            ? allCheekyDatafilteredArray.reduce(
                (sum, item) => sum + item.cheeky,
                0
              ) / allCheekyDatafilteredArray.length
            : 0;
        setCheekyData(averageCheekyScore);
        // all tired data
        const allTiredDatafilteredArray = filteredArray.filter(
          (item) => item.tired !== undefined && item.tired !== null
        );
        averageTiredScore =
          allTiredDatafilteredArray.length > 0
            ? allTiredDatafilteredArray.reduce(
                (sum, item) => sum + item.tired,
                0
              ) / allTiredDatafilteredArray.length
            : 0;
        setTiredData(averageTiredScore);
        //all worried data
        const allWorriedDatafilteredArray = filteredArray.filter(
          (item) => item.worried !== undefined && item.worried !== null
        );
        averageWorriedScore =
          allWorriedDatafilteredArray.length > 0
            ? allWorriedDatafilteredArray.reduce(
                (sum, item) => sum + item.worried,
                0
              ) / allWorriedDatafilteredArray.length
            : 0;
        setWorriedData(averageWorriedScore);
        newData = [happyData, sadData, cheekyData, tiredData, worriedData, angryData];
        break;
    }

    setChartData((prevChartData) => ({
      ...prevChartData,
      datasets: [
        {
          ...prevChartData.datasets[0],
          data: newData,
          label: `# - Count of Emotions (${tab})`,
        },
      ],
    }));
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
    <Flex justifyContent="center" gap="5">
      <Tabs variant="soft-rounded" colorScheme="green" paddingTop={10}>
        <TabList>
          <Tab onClick={() => handleTabClick("all")}>
            <Text>All</Text>
          </Tab>
          <Tab onClick={() => handleTabClick("last 7 Days")}>
            <Text>Last 7 days</Text>
          </Tab>
          <Tab onClick={() => handleTabClick("last 30 Days")}>
            <Text>Last 30 days</Text>
          </Tab>
        </TabList>
      </Tabs>
    </Flex>
      <Flex justifyContent="center" textAlign="center">
        <Box
          width={[300, 400, 600]}
          bg="brand.orange"
          borderRadius="20px"
          textAlign="center"
          boxShadow="lg"
          mt="5"
          pb="2"
          pl="2"
          pr="2"
        >
          <Heading fontSize="md" as="h2" p="3">
            Average Mood Scores
          </Heading>
          <Text as="em" fontSize="sm" fontWeight="bold">
            This is from the &apos;dive deeper&apos; section of the app. This
            shows the average scores for the time period selected above.
          </Text>
          {/* <SimpleGrid columns={2} p="3">
            <Text>Happy: {happyData.toFixed(1)}</Text>
            <Text>Sad: {sadData.toFixed(1)}</Text>
            <Text>Angry: {angryData.toFixed(1)}</Text>
            <Text>Worried: {worriedData.toFixed(1)}</Text>
            <Text>Cheeky: {cheekyData.toFixed(1)}</Text>
            <Text>Tired: {tiredData.toFixed(1)}</Text>
          </SimpleGrid> */}
        </Box> 
      </Flex>
      <Flex justifyContent="center" alignItems="center">
      <Center>
        <Box paddingTop={5} >
        {isSmallScreen ? (
            <Pie data={chartData} options={options} width={170} height={170} />
          ) : (
            <Pie data={chartData} options={options} width={300} height={300} />
          )}
        </Box>
      </Center>
      </Flex>
    </>
  );
}