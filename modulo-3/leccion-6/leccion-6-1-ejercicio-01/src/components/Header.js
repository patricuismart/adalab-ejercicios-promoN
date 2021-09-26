import Logo from './Logo';
import Menu from './Menu';
import '../styles/App.scss';
import '../styles/Reset.scss';

const Header = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Menu />
      </header>
    </div>
  );
};

export default Header;
