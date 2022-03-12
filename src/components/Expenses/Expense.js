function Expense(props) {
  return (
    <div className="expense">
      <div className="expense__left">
        <div className="expense__title">{props.title}</div>
        <div className="expense__date">{props.date}</div>
      </div>
      <div className="expense__right">
        <button className="expense__delete">
          <span>Delete</span> X
        </button>
        <div className="expense__amount">£ {props.amount}</div>
      </div>
    </div>
  );
}

export default Expense;
