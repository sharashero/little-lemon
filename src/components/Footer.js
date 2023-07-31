import Nav from './Nav';
import { navLinks } from '../common';

function Footer() {
  return (
    <footer>
      <div className="logo-footer">
        <img src="LogoPort.png" alt="" />
      </div>

      <Nav links={navLinks} />

      <div>
        Contacts
      </div>

      <div>
        Social Media
      </div>
    </footer>
  );
}

export default Footer;
