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

  const sortItems = items.toSorted((a,b)=>a.id-b.id);

  const data = sortItems.map(item=>{
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
            <Tooltip content={CustomTooltip}/>
            <Bar dataKey="value" fill="#2f6fed" />
        </BarChart>
        </ResponsiveContainer>
    </div>
);
}

function CustomTooltip({ payload, label, active }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          border: '1px solid #d88488',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '1px 1px 2px #d88488',
        }}
      >
        <p className="label" style={{ margin: '0', fontWeight: '700' }}>{`${label} : ${payload[0].value} Million Units`}</p>
        <p className="intro" style={{ margin: '0' }}>
        </p>
        <p className="desc" style={{ margin: '0', borderTop: '1px dashed #f5f5f5' }}>
        </p>
      </div>
    );
  }
  }