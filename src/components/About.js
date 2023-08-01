function About() {
  return (
    <section className="about container">
      <div className="about-info">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally.</p>
      </div>

      <div className="about-images">
        <img className="rounded" src="mario-adrian-b.jpg" alt="chefs" />
        <img className="rounded" src="mario-adrian-a.jpg" alt="chefs" />
      </div>
    </section>
  );
}

export default About;
