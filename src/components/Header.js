import Nav from './Nav';
import { navLinks } from '../common';

function Header() {
  return (
    <header className="container">
      <div className="logo">
        <img src="Logo.svg" alt="logo" />
      </div>

      <Nav links={navLinks} />
    </header>
  );
}

export default Header;
