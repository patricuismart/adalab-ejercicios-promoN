import '../styles/App.scss';
import '../styles/Reset.scss';

import adalabLogo from '../images/adalab-logo-155x61.png';

const Logo = () => {
  return (
    <div>
      <a href="https://adalab.es/" target="_blank">
        <img
          title="Home Adalab"
          src={adalabLogo}
          alt="Logo Adalab"
          className="logo"
        />
      </a>
    </div>
  );
};
export default Logo;
