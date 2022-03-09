import Group from "./Group";

function Overview(props) {
  return (
    <div className="overview">
      <h2 className="overview__header">Year Overview</h2>
      <div className="overview__container">
        <div className="overview__meter">
          <div className="overview__meter--outer"></div>
          <div className="overview__meter--inner">
            £{props.amount}
            <span>Total</span>
          </div>
        </div>
        <div className="overview__groups">
          <Group name="Housing" amount="500" percentage="30" />
        </div>
      </div>
    </div>
  );
}

export default Overview;
