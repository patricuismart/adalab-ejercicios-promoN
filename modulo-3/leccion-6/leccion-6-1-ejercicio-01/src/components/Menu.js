import '../styles/App.scss';
import '../styles/Reset.scss';
const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="menu-item">
            <a
              title="Blog"
              className="menu-link"
              href="https://adalab.es/blog/"
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li className="menu-item">
            <a
              title="Contacto"
              className="menu-link"
              href="mailto:hola@adalab.es"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
