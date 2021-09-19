// Fichero src/components/App.js
import '../styles/App.css';
import logo from '../images/logo.png';

function App() {
  return (
    <div>
      <header className="header">
        <a href="https://adalab.es/" target="_blank">
          <img src={logo} alt="Logo Adalab" />
        </a>
        <nav>
          <ul className="menu">
            <li className="menu-item">
              <a
                className="link-item"
                href="https://adalab.es/blog/"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li className="menu-item">
              <a className="link-item" href="mailto:hola@adalab.es">
                Contcato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="tittle-item">creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
