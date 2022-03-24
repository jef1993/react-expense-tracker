import React from "react";
import Meter from "./Meter";
import shortenNum from "../functions";

function Breakdown(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthTotal = (index) => {
    const output = props.expenses
      .filter((obj) => Number(obj.date.split("-")[1]) - 1 === index)
      .map((data) => Number(data.amount))
      .reduce((a, c) => {
        return a + c;
      }, 0);
    return output;
  };

  const meterPercentage = (i) => {
    return (monthTotal(i) / props.yearTotal) * 100;
  };

  const test = () => {
    console.log(props.yearTotal);
  };

  return (
    <div className="breakdown">
      <h2 className="breakdown__header header">Monthly Breakdown</h2>
      <div className="breakdown__container">
        {months.map((month, i) => (
          <Meter
            amount={shortenNum(monthTotal(i))}
            month={month}
            percentage={`${meterPercentage(i) ? meterPercentage(i) : 0}`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Breakdown;
