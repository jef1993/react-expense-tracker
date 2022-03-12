import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
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
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;
