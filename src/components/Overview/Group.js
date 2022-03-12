function Group(props) {
  return (
    <div className="group">
      <div className="group__header">
        <div className="group__color"></div>
        <div className="group__name">{props.name}</div>
      </div>
      <div className="group__details">
        <div className="group__amount">£{props.amount}</div>
        <div className="group__percentage">{props.percentage}%</div>
      </div>
    </div>
  );
}

export default Group;
