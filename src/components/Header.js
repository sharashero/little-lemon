import Nav from './Nav';

const navLinks = [
  { href: '#', name: 'Home' },
  { href: '#', name: 'About' },
  { href: '#', name: 'Menu' },
  { href: '#', name: 'Reservations' },
  { href: '#', name: 'Order online' },
  { href: '#', name: 'Login' },
];

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="Logo.svg" alt="logo" />
      </div>

      <Nav links={navLinks} />
    </header>
  );
}

export default Header;
