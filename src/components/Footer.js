import Nav from './Nav';

const navLinks = [
  { href: '#', name: 'Home' },
  { href: '#', name: 'About' },
  { href: '#', name: 'Menu' },
  { href: '#', name: 'Reservations' },
  { href: '#', name: 'Order online' },
  { href: '#', name: 'Login' },
];

function Footer() {
  return (
    <footer>
      <div >
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
