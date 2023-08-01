import Button from "./Button";
import Card from "./Card";

const cards = [
  { image: 'greek salad.jpg', title: 'Greek Salad', price: '$12.99', description: 'The famous greek salad of crispy lettus, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'},
  { image: 'bruchetta.svg', title: 'Bruchetta', price: '$5.99', description: 'Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'},
  { image: 'lemon dessert.jpg', title: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'},
];

function Highlights() {
  return (
    <section className="highlights container">
      <div className="specials">
        <h2>This weeks specials!</h2>
        <Button>Order Online</Button>
      </div>

      <div className="cards">
        {cards.map(card => <Card key={card} {...card} />)}
      </div>
    </section>
  );
}

export default Highlights;
