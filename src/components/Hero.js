import Button from "./Button";

function Hero() {
  return (
    <section className="hero container">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>A family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally.</p>
        <Button>Reserve a Table</Button>
      </div>

      <div className="overflow-img-wrapper">
        <img className="overflow-img rounded" src="restauranfood.jpg" alt="food" />
      </div>
    </section>
  );
}

export default Hero;
