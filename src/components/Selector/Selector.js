import React, { useState } from "react";

function Selector(props) {
//   const [value, setValue] = useState();

//   const changeHandler = (e) => {
//     setValue(e.target.value);
//   };
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
