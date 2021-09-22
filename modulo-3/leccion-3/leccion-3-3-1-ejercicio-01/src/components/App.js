import { useState } from 'react';
// Fichero src/components/App.js
const App = () => {
  const [ingredient, setIngredient] = useState([]);
  const handleIngredient = (ev) => {
    //ver si el inpt de checkbox está activo
    // si si, lo añado al array

    if (ev.currentTarget.checked) {
      const newIngredient = [...ingredient, ev.currentTarget.value];

      setIngredient(newIngredient);
      console.log(newIngredient);
    } else {
      // si no, lo quito del array
      const ingredientFilter = ingredient.filter(
        (ingredientEl) => ingredientEl !== ev.currentTarget.value
      );
      setIngredient(ingredientFilter);
      console.log(ingredientFilter);
    }
  };
  const handleCheckAll = (ev) => {
    ev.preventDefault();
    setIngredient(true);
  };
  const handleDesmarkAll = (ev) => {
    ev.preventDefault();
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
        />
        <label>Patatas</label>

        <input
          type="checkbox"
          name="ingredients"
          value="huevos"
          onChange={handleIngredient}
        />
        <label>Nueces</label>

        <input
          type="checkbox"
          name="ingredients"
          value="cebolla"
          onChange={handleIngredient}
        />
        <label>Huevos</label>

        <input
          type="checkbox"
          name="ingredients"
          value="cerveza"
          onChange={handleIngredient}
        />
        <label>Cebolla</label>

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
