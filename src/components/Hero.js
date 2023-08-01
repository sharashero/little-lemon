import Button from "./Button";

function Hero() {
  return (
    <section className="hero container">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam dolor natus ut tenetur iusto ullam, voluptate temporibus doloribus fugiat repellat quae impedit odit ratione illum? Eligendi alias velit cumque.</p>
        <Button>Reserve a Table</Button>
      </div>

      <div className="overflow-img-wrapper">
        <img className="overflow-img rounded" src="restauranfood.jpg" alt="food" />
      </div>
    </section>
  );
}

export default Hero;
