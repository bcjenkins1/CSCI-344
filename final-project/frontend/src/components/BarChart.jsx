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

  const data = items.map(item=>{
    return {
      name: item.title, value: item.total_units_sold
    }
  })

    if (items.length === 0) {
      return <div>Loading chart...</div>;
    }

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