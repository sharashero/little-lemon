import Testmonial from "./Testimonial";

const testimonials = [
    { rating: 'Rating', image: 'lemon dessert.jpg', name: 'Tim', text: 'Review text'},
    { rating: 'Rating', image: 'lemon dessert.jpg', name: 'Sarah', text: 'Review text'},
    { rating: 'Rating', image: 'lemon dessert.jpg', name: 'Loay', text: 'Review text'},
    { rating: 'Rating', image: 'lemon dessert.jpg', name: 'Hend', text: 'Review text'},
];

function Testimonials() {
  return (
    <section className="testimonials container">
      <h2>TESTIMONIALS</h2>
      <div className="reviews">
        {testimonials.map((item, index) => <Testmonial key={index} {...item} />)}
      </div>
    </section>
  );
}

export default Testimonials;
