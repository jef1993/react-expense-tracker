import Meter from "./Meter";

function Breakdown() {
  return (
    <div className="breakdown">
      <h2 className="breakdown__header header">Monthly Breakdown</h2>
      <div className="breakdown__container">
        <Meter amount="500" month="Jan" percentage="10" />
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
        <Meter amount="500" month="Jan" percentage="0" />
      </div>
    </div>
  );
}

export default Breakdown;
