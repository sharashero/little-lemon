import Nav from './Nav';
import { navLinks } from '../common';

function Footer() {
  return (
    <footer>
      <div>
        Footer Logo
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
