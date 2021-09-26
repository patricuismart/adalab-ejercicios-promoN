// Fichero src/components/App.js
import '../styles/App.scss';
import '../styles/Reset.scss';
import Header from './Header';
import Main from './Main';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
