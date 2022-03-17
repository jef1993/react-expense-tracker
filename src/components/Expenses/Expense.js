import React, { useState } from "react";

function Expense(props) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const date = props.date.toLocaleString("en-GB", options);
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {};

  return (
    <div className="expense">
      <div className="expense__left">
        <div className="expense__title">{title}</div>
        <div className="expense__date">{date}</div>
      </div>
      <div className="expense__right">
        <button className="expense__btn" onClick={clickHandler}>
          Edit
        </button>
        <div className="expense__amount">£ {props.amount}</div>
      </div>
    </div>
  );
}

export default Expense;
