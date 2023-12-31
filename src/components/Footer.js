import Nav from './Nav';
import { navLinks } from '../common';

function Footer() {
  return (
    <footer className="container">
      <div className="logo-footer">
        <img src="LogoPort.png" alt="" />
      </div>

      <div>
        <span className="footer-cat">Doormat navigation</span>
        <Nav links={navLinks} />
      </div>

      <div>
        <span className="footer-cat">Contact Us</span>
        <div>Adress</div>
        <div>Phone number</div>
        <div>email@example.com</div>
      </div>

      <div>
        <span className="footer-cat">Social Media</span>
        <div>---</div>
        <div>---</div>
        <div>---</div>
      </div>
    </footer>
  );
}

export default Footer;
