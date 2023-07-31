import Nav from './Nav';
import { navLinks } from '../common';

function Footer() {
  return (
    <footer>
      <div className="logo-footer">
        <img src="LogoPort.png" alt="" />
      </div>

      <div>
        <span className="footer-cat">Doormat navigation</span>
        <Nav links={navLinks} />
      </div>

      <div>
        <span className="footer-cat">Contacts</span>
      </div>

      <div>
        <span className="footer-cat">Social Media</span>
      </div>
    </footer>
  );
}

export default Footer;
