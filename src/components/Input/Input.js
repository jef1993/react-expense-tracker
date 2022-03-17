import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
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
      ></input>
    </div>
  );
}

export default Input;
