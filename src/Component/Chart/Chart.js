import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {props.dataPoints.map((element) => (
        <ChartBar
          key={element.label}
          value={element.value}
          maxValue={totalMax}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default Chart;
