import React, { useState } from "react";

function Expense(props) {
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const [year, month, day] = props.date.split("-");
  const date = new Date(year, month - 1, day).toLocaleString("en-GB", options);

  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {};

  return (
    <li className="expense">
      <div className={`expense__group ${props.group}`}></div>
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
    </li>
  );
}

export default Expense;
