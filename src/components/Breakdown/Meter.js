function Meter(props) {
  return (
    <div className="meter">
      <div className="meter__amount">£{props.amount}</div>
      <div className="meter__case">
        <div className="meter__fill" style={{ height: `${props.percentage}%` }}>
          <div className="meter__color"></div>
        </div>
      </div>
      <div className="meter__month">{props.month}</div>
    </div>
  );
}

export default Meter;
