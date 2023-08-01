function Testmonial({ rating, image, name, text }) {
  return (
    <div className="testimonial">
      <div className="testimonial-title">
        <h4>{rating}</h4>
      </div>

      <div className="testimonial-user">
        <div>
          <img src={image} alt={name} />
        </div>

        <h4>{name}</h4>
      </div>

      <div className="testimonial-text">
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Testmonial;
