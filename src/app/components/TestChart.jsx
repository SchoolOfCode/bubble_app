"use client"
import React, { useContext, useState, useEffect } from 'react';
import { Box, Center, Flex, Text, Tab, Tabs } from '@chakra-ui/react';
import { MoodDataContext } from '../context/dataforchartscontext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function TestChart() {
  const {
    happyData,
    sadData,
    cheekyData,
    tiredData,
    worriedData,
    angryData,
    weekhappyData,
    weeksadData,
    weektiredData,
    weekcheekyData,
    weekworriedData,
    weekangryData,
    monthhappyData,
    monthsadData,
    monthtiredData,
    monthcheekyData,
    monthworriedData,
    monthangryData,
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
            color: "black",
        }
      },
    },
    maintainAspectRatio: false,
  };

  useEffect(() => {
    updateDataForTab(selectedTab);
  }, [selectedTab]);

  const updateDataForTab = (tab) => {
    let newData;

    switch (tab) {
      case "last 7 Days":
        newData = [weekhappyData, weeksadData, weekcheekyData, weektiredData, weekworriedData, weekangryData];
        break;
      case "last 30 Days":
        newData = [monthhappyData, monthsadData, monthcheekyData, monthtiredData, monthworriedData, monthangryData];
        break;
      default:
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
      <Tabs variant="soft-rounded" colorScheme="green" paddingTop={10}>
        <Flex justifyContent="center" gap="5" flexDirection="row">
          <Tab onClick={() => handleTabClick("all")}>
            <Text>All</Text>
          </Tab>
          <Tab onClick={() => handleTabClick("last 7 Days")}>
            <Text>Last 7 days</Text>
          </Tab>
          <Tab onClick={() => handleTabClick("last 30 Days")}>
            <Text>Last 30 days</Text>
          </Tab>
        </Flex>
      </Tabs>
      <Center>
        <Box paddingTop={10}>
          <Pie data={chartData} options={options}/>
        </Box>
      </Center>
    </>
  );
}