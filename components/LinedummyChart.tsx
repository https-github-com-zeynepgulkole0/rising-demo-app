"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "GB"],
  ["", 0.2],
  ["Mon", 1.1],
  ["Tue", 0.8],
  ["Wed", 0.8],
  ["Thu", 2],
  ["Fri", 2.6],
  ["Sat", 4.4],
  ["Sun", 8.1],
  ["", 9],
];

export const options = {
  title: "Data usage per network",
  curveType: "function",
  legend: { position: "bottom" },
};

export function LinedummyChart() {
  return (
    <div className="chart-container">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default LinedummyChart;
