function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__message">
        <h1 className="banner__welcome--left">Hi, {props.username}.</h1>
        <p className="banner__welcome--right">
          Here is your expenses of <span>{props.year}.</span>
        </p>
      </div>
      <div className="banner__selector">
        <label for="select-year">Select year: </label>
        <select name="select-year" id="select-year">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default Banner;
