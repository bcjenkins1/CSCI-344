import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";


export default function BarChartComponent({ items }) {
  console.log(items);

  const counts = {};

  for (let item of items) {
    const category = item.category;

    if (counts[category]) {
      counts[category] += 1;
    } else {
      counts[category] = 1;
    }
  }

  const data = [
      { name: "A", value: 4 },
      { name: "B", value: 7 },
      { name: "C", value: 2 },
    ];

    return (
    <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2f6fed" />
        </BarChart>
        </ResponsiveContainer>
    </div>
);
}