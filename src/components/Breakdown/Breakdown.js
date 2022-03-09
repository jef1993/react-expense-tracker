import Meter from "./Meter";

function Breakdown() {
  return (
    <div className="breakdown">
      <h2 className="breakdown__header">Monthly Breakdown</h2>
      <div className="breakdown__container">
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
        <Meter amount="500" month="Jan" percentage="100" />
      </div>
    </div>
  );
}

export default Breakdown;
