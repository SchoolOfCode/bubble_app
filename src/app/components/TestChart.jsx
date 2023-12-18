"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { MoodDataContext } from '../context/dataforchartscontext';
import { useContext } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export function TestChart() {

const { happyData, sadData, tiredData, cheekyData, worriedData, angryData } = useContext(MoodDataContext);

const data = {
  labels: ['Happy', 'Sad', 'Cheeky', 'Tired', 'Worried', 'Angry'],
  datasets: [
    {
      label: '# of Votes',
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
};


return (
      <Pie data={data} />
  );
    
}