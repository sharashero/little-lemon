import { Link } from 'react-router-dom';

function Nav({ links }) {
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <Link to={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
