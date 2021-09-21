// Fichero src/components/App.js
import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const renderDarkModeText = () => {
    if (theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
    console.log(theme);
  };

  return (
    <div className={theme}>
      <button className="form__buton" onClick={renderDarkModeText}>
        Des / activar el dark mode
      </button>
      <p className="text"> Tienes activado el dark mode</p>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipiscing elit, ridiculus
        lobortis nostra cum sapien mus odio gravida, vivamus suscipit hendrerit
        laoreet curae vel. Ultrices elementum aliquet dui lacinia posuere justo
        tempor, sed mollis blandit quam pretium aliquam eros, rutrum nunc erat
        primis hendrerit a. Molestie dis quam congue vulputate conubia vitae cum
        habitant imperdiet faucibus curae tempor purus, sed ut egestas lacus
        bibendum cubilia accumsan cras vehicula libero quis et, sem habitasse
        aptent sociosqu curabitur id non ultricies eros nibh phasellus maecenas.{' '}
      </p>
    </div>
  );
};
export default App;
