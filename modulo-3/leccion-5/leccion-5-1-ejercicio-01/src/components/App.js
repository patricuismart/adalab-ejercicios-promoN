// Fichero src/components/App.js
import { useEffect, useState } from 'react';
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear

const App = () => {
  // Estados

  const [shows, setShows] = useState([]);

  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos los shows en el estado
      setShows(response);
    });
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez al API para obtener nuevos datos
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
    console.log(ev.target.value);
  };

  // Renderizado

  const renderShows = () => {
    return shows.map((show, index) => {
      return <li key={index}>{show.name}</li>;
    });
  };

  return (
    <div>
      <label>Buscar serie: </label>
      <input
        type="text"
        name="input"
        value={searchName}
        placeholder="Ej: Lost"
        onChange={handleSearchName}
      ></input>
      <h2>Tu búsqueda: {searchName}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;
