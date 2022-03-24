import React from "react";

function Input(props) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={props.name}>
        {props.name}
      </label>
      <input
        className="input__box"
        id={props.name}
        name="new-expense"
        type={props.type}
        value={props.value}
        min={props.min}
        step={props.step}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
      ></input>
    </div>
  );
}

export default Input;
