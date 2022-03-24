import shortenNum from "../functions";

function Meter(props) {
  return (
    <div className="meter" onClick={props.onClick}>
      <div className="meter__amount">£{shortenNum(props.value)}</div>
      <div className="meter__case">
        <div
          className="meter__fill"
          style={{ height: `${(props.value / props.maxValue) * 100}%` }}
        >
          <div className="meter__color"></div>
        </div>
      </div>
      <div className="meter__month">{props.month}</div>
    </div>
  );
}

export default Meter;
