// DonutChartComponent.js
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mac", value: 40000 },
  { name: "Windows", value: 50000 },
  { name: "iOS", value: 30000 },
  { name: "Android", value: 68245 },
];

const COLORS = ["#7AE7C7", "#68B984", "#4B6587", "#34495E"];
const total = data.reduce((acc, cur) => acc + cur.value, 0)
const DonutChart = () => {
  return (
    <div  className=" h-[350px] w-[350px] relative">
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute flex flex-col items-center top-1/2 pb-5 left-1/2 transform font-bold 
       -translate-y-1/2  -translate-x-1/2">
        <span className="text-gray-400 font-thin">Total</span>
        {total}
      </div>
    </div>
  );
};

export default DonutChart;
