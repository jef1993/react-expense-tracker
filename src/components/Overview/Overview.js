import React, { useContext } from "react";

import Group from "./Group";
import shortenNum from "../functions";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ExpensesContext from "../storage/expensesContext";

function Overview(props) {
  const ctx = useContext(ExpensesContext);
  const groupsData = props.groups.map((el) => {
    const data = {};
    data.name = el;
    data.value = 0;
    return data;
  });

  ctx.filteredData.forEach((data) => {
    groupsData[groupsData.map((obj) => obj.name).indexOf(data.group)].value +=
      Number(data.amount);
  });

  const groupSum = groupsData
    .map((obj) => obj.value)
    .reduce((a, c) => {
      return a + c;
    }, 0);

  ChartJS.register(ArcElement);

  const data = {
    labels: props.groups,
    datasets: [
      {
        data: groupsData.map((obj) => obj.value),
        backgroundColor: [
          "rgb(67, 217, 236)",
          "rgb(3, 148, 10)",
          "rgb(238, 224, 30)",
          "rgb(238, 39, 172)",
          "rgb(148, 148, 148)",
        ],
        borderWidth: 0,
        borderColor: "1e1e1e",
        cutout: "60%",
      },
    ],
  };

  const groupPercentage = (num) => {
    const output = ((num.value / groupSum) * 100).toFixed(1);
    return isNaN(output) ? 0 : ((num.value / groupSum) * 100).toFixed(1);
  };

  return (
    <div className="overview">
      <h2 className="overview__header header">Year Overview</h2>

      <div className="overview__container">
        <div className="overview__backdrop"></div>
        <div className="overview__meter">
          <Doughnut data={data} />
          <div className="overview__cover">
            <div className="overview__total">
              £{shortenNum(props.amount, 1)}
              <p className="overview__letter">Total</p>
            </div>
          </div>
        </div>

        <div className="overview__groups">
          {groupsData.map((data, i) => (
            <Group
              name={data.name}
              amount={data.value}
              percentage={groupPercentage(data)}
              color={`group--${i + 1}`}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
