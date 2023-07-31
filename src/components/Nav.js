function Nav({ links }) {
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li key={link.name}>
            <a href={link.href}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
