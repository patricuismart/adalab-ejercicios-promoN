import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const handleText = (ev) => {
    const textArea = ev.target.value;
    let newText = textArea.replace(/[aeiou]/gi, 'i'); //cambia las vocales por "i"
    setText(newText);
  };
  return (
    <div>
      <form action="">
        <textarea
          placeholder="Escribe aquí tu texto"
          name="text"
          id="text"
          cols="40"
          rows="10"
          onChange={handleText}
        ></textarea>
        <p>Tu texto transformado es: {text}</p>
      </form>
    </div>
  );
}

export default App;
