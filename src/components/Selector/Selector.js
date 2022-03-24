import React from "react";

function Selector(props) {
  return (
    <select
      name={props.name}
      id={props.name}
      className={props.classes}
      onChange={props.onChange}
      value={props.value}
    >
      {props.options.map((el, i) => (
        <option value={el} key={i}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Selector;
