const Filetrs = (props) => {
  console.log('filter', props);
  return (
    <form>
      <label className="form__label display-block" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input
        className="form__input-text"
        type="text"
        name="name"
        id="name"
        value={props.searchName}
        onChange={props.handleChangeSearchName}
      />
      <label className="form__label display-block" htmlFor="gender">
        Género:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        value={props.searchGender}
        onChange={props.handleChangeSearchGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
        <option value="no-binary">No binario</option>
      </select>
    </form>
  );
};

export default Filetrs;
