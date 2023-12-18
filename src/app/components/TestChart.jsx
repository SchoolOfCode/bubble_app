"use client"
import React, { useContext, useState } from 'react';
import { Box, Center, Flex, Text, Tab, TabList, Tabs } from '@chakra-ui/react';
import { MoodDataContext } from '../context/dataforchartscontext';
import style from "../page.module.css" // Update the path as needed
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

  console.log(happyData, sadData, cheekyData, tiredData, worriedData, angryData);

  console.log(weekhappyData, weeksadData, weekcheekyData, weektiredData, weekworriedData, weekangryData);
  
  console.log(monthhappyData, monthsadData, monthcheekyData, monthtiredData, monthworriedData, monthangryData);

  let data;
  let options;
  
  
  const updateDataForTab = (tab) => {
    let newData;
    
    switch (tab) {
      case "last 7 Days":
        newData = [weekhappyData, weeksadData, weekcheekyData, weektiredData, weekworriedData, weekangryData];
        let data = {
          labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
          datasets: [
            {
              label: `# - Count of Emotions (${tab})`,
              data: newData,
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
        };
  
        let options = {
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: 'black', // Change this to the color you want
              },
            },
          },
          maintainAspectRatio: false,
        };
        break;
  
      case "last 30 Days":
        newData = [monthhappyData, monthsadData, monthcheekyData, monthtiredData, monthworriedData, monthangryData];
        data = {
          labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
          datasets: [
            {
              label: `# - Count of Emotions (${tab})`,
              data: newData,
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
        };
  
        options = {
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: 'black', // Change this to the color you want
              },
            },
          },
          maintainAspectRatio: false,
        };
        break;
  
      default:
        newData = [happyData, sadData, cheekyData, tiredData, worriedData, angryData];
        data = {
          labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
          datasets: [
            {
              label: `# - Count of Emotions (${selectedTab})`,
              data: newData,
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
        };
  
        options = {
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                color: 'black', // Change this to the color you want
              },
            },
          },
          maintainAspectRatio: false,
        };
    }
  
    // Ensure the chart is re-rendered
    setSelectedTab(tab);
    console.log(data.datasets[0].data);
  };

  return (
    <>
    <Tabs variant="soft-rounded" colorScheme="green" paddingTop={10}>
      <Flex justifyContent="center" gap="10" flexDirection="row">
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
          <Pie data={data} options={options} className={style.piechart} />
        </Box>
      </Center>
    </>
  );
}