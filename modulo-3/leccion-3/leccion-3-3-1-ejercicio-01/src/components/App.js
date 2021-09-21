import { useState } from 'react';
// Fichero src/components/App.js
const App = () => {
  const [ingredient, setIngredient] = useState(false);
  const handleIngredient = (ev) => {
    const valueIngredient = ev.target.checked;
    const idIngredient = ev.target.id;
    setIngredient();
  };
  const handleCheckAll = (ev) => {
    setIngredient(true);
  };
  const handleDesmarkAll = (ev) => {
    setIngredient(false);
  };
  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        <input
          type="checkbox"
          name="ingredients"
          value="macarrones"
          onChange={handleIngredient}
        />
        <label>Macarrones</label>
        <input
          type="checkbox"
          name="ingredients"
          value="patatas"
          onChange={handleIngredient}
          checked=
        />
        <label>Patatas</label>
        <input type="checkbox" />
        <label>Nueces</label>
        <input
          type="checkbox"
          name="ingredients"
          value="huevos"
          onChange={handleIngredient}
        />
        <label>Huevos</label>
        <input
          type="checkbox"
          name="ingredients"
          value="cebolla"
          onChange={handleIngredient}
        />
        <label>Cebolla</label>
        <input
          type="checkbox"
          name="ingredients"
          value="cerveza"
          onChange={handleIngredient}
        />
        <label>Cerveza</label>
        <button onClick={handleCheckAll}>Marca todos</button>
        <button onClick={handleDesmarkAll}>Desmarca todos</button>
        <p>
          {ingredient === true
            ? 'Eres una persona concebollista'
            : 'Eres un robot sin paladar'}
        </p>
      </form>
    </div>
  );
};

export default App;
