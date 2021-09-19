// Fichero src/components/App.js
import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  let counter = 0;
  const [number, setNumber] = useState(0);

  const add = () => {
    counter = number + 1;
    return setNumber(counter);
  };

  const rest = () => {
    counter = number - 1;
    return setNumber(counter);
  };

  const reset = () => {
    setNumber(0);
  };
  return (
    <div>
      <p className="text"> Contador : {number}</p>

      <button className="form__buton js_buton" onClick={add}>
        Suma
      </button>
      <button className="form__buton js_buton" onClick={rest}>
        Resta
      </button>
      <button className="form__buton js_buton" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default App;
