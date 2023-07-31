function Nav({ links }) {
  return (
    <nav>
      <ul>
        {links.map(link => (
          <li>
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
