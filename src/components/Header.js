import { Link } from 'react-router-dom';
import Nav from './Nav';
import { navLinks } from '../common';

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <div className="logo">
          <img src="Logo.svg" alt="logo" />
        </div>
      </Link>

      <Nav links={navLinks} />
    </header>
  );
}

export default Header;
