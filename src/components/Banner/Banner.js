function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__message">
        <h1 className="banner__message--left">
          Hi, {props.username}.{" "}
          <span className="banner__message--right">
            Here is your expenses of{" "}
            <span className="banner__message--year">{props.year}.</span>
          </span>
        </h1>
      </div>
      <div className="banner__selector">
        <label for="select-year" className="select-year__label">
          Select year :
        </label>
        <select
          name="select-year"
          id="select-year"
          className="select-year__box"
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default Banner;
