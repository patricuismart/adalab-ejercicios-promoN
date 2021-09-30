const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        Escribe un nombre:
      </label>
      <input
        className="input-text"
        type="text"
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default InputGroupText;
