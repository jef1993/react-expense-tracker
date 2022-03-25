import React from "react";
import Selector from "../Selector/Selector";

function Banner(props) {
  const dataYears = props.dataEntry.map((expense) =>
    new Date(expense.date).getFullYear()
  );

  const yearOptions =
    dataYears.length > 0
      ? [...new Set(dataYears)].sort((a, b) => b - a)
      : [new Date().getFullYear()];

  return (
    <div className="banner">
      <div className="banner__message">
        <h1 className="banner__message--left">
          Hello there.
        </h1>
        <p className="banner__message--right">
          Here is your expenses of{" "}
          <span className="banner__message--year">{props.value}.</span>
        </p>
      </div>
      <div className="banner__selector">
        <label htmlFor="select-year" className="select-year__label">
          Select year :
        </label>
        <Selector
          name="select-year"
          classes="select-year__box"
          options={yearOptions}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default Banner;
