function Expense(props) {
  return (
    <div className="expense">
      <div className="expense__detail">
        <div className="expense__title">{props.title}</div>
        <div className="expense__date">{props.date}</div>
      </div>
      <button className="expense__delete">Delete X</button>
      <div className="expense__amount">£{props.amount}</div>
    </div>
  );
}

export default Expense;
