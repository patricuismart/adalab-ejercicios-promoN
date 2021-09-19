// Fichero src/components/App.js
import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('shown');
  const renderHamburguerMenu = () => {
    if (theme === 'hidden') {
      setTheme('shown');
    }
    console.log(theme);
  };

  const unRenderHamburguerMenu = () => {
    if (theme === 'shown') {
      setTheme('hidden');
    }
  };
  return (
    <div>
      <nav>
        <button className="form__buton" onClick={renderHamburguerMenu}>
          <i className="icon fas fa-bars"></i>
        </button>
      </nav>
      <div className={theme}>
        {' '}
        <button>
          <i className="fas fa-arrow-left" onClick={unRenderHamburguerMenu}></i>
        </button>
        <ul>
          <li>
            <a>menu 1</a>
          </li>
          <li>
            <a>menu 2</a>
          </li>
          <li>
            <a>menu 3</a>
          </li>
          <li>
            <a>menu 4</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default App;
