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

  // const meterPercentage = (index) => {
  //   const output = monthTotal(index / props.yearTotal) * 100;
  //   console.log(output);
  //   return output;
  // };

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
            percentage={`${(monthTotal(i) / props.yearTotal) * 100}`}
            key={i}
          />
        ))}
        {/* <Meter amount="500" month="Jan" percentage="10" />
        <Meter amount="500" month="Feb" percentage="10" />
        <Meter amount="500" month="Jan" percentage="10" />
        <Meter amount="500" month="Jan" percentage="30" />
        <Meter amount="500" month="Jan" percentage="10" />
        <Meter amount="500" month="Jan" percentage="50" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="92" />
        <Meter amount="500" month="Jan" percentage="10" />
        <Meter amount="500" month="Jan" percentage="10" />
        <Meter amount="500" month="Jan" percentage="5" />
        <Meter amount="500" month="Jan" percentage="0" /> */}
      </div>
    </div>
  );
}

export default Breakdown;
