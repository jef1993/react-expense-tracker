import React, { useContext } from "react";
import Meter from "./Meter";
import ExpensesContext from "../storage/expensesContext";

function Breakdown(props) {
  const ctx = useContext(ExpensesContext);
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  ctx.filteredData.forEach((expense) => {
    const expenseMonth = Number(expense.date.split("-")[1]) - 1;
    chartDataPoints[expenseMonth].value += Number(expense.amount);
  });

  const dataPointValues = ctx.filteredData.map((obj) => obj.amount);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="breakdown">
      <h2 className="breakdown__header header">Monthly Breakdown</h2>
      <div className="breakdown__container">
        {chartDataPoints.map((month, i) => (
          <Meter
            value={month.value}
            month={month.label}
            maxValue={maxValue}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Breakdown;
