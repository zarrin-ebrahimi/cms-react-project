// StackedBarChartComponent.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Asia: 10, Europe: 20, Americas: 5 },
  { month: "Feb", Asia: 30, Europe: 25, Americas: 10 },
  { month: "Mar", Asia: 20, Europe: 20, Americas: 8 },
  { month: "Apr", Asia: 25, Europe: 30, Americas: 12 },
  { month: "May", Asia: 40, Europe: 35, Americas: 15 },
  { month: "Jun", Asia: 18, Europe: 22, Americas: 8 },
  { month: "Jul", Asia: 45, Europe: 35, Americas: 20 },
  { month: "Aug", Asia: 38, Europe: 30, Americas: 18 },
  { month: "Sep", Asia: 15, Europe: 20, Americas: 10 },
  { month: "Oct", Asia: 50, Europe: 40, Americas: 25 },
  { month: "Nov", Asia: 22, Europe: 18, Americas: 12 },
  { month: "Dec", Asia: 30, Europe: 25, Americas: 15 },
];

const StackedBarChart = () => {
  return (
  <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]  pr-5 ">
      <ResponsiveContainer width={'100%'}  height={"100%"}>
      <BarChart width={950} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Asia" stackId="a" fill="#096B68" barSize={30} />
        <Bar dataKey="Europe" stackId="a" fill="#FF9F00" barSize={30} />
        <Bar
          dataKey="Americas"
          stackId="a"
          fill="#60B5FF"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default StackedBarChart;
