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
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;
