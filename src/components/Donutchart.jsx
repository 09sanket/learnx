import React from "react";
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const DonutChart = () => {
  // Sample data
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
      }}
    >
      
     
      <PieChart width={300} height={300}>
        <Tooltip />
        <Pie
          data={data}
          dataKey="students"
          outerRadius={100}
          innerRadius={70}
          fill="blue"
          label={({ name, students }) => `${name}: ${students}`}
        >
          <Label
            value="#50"
            position="center"
            fill="blue"
            fontSize={16}
          />
        </Pie>
      </PieChart>
    </div>
  );
};

export default DonutChart;
