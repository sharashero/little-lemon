import scooter from '../assets/scooter.svg';

function Card({ image, title, price, description }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>

      <div className="card-header">
        <h4>{title}</h4>
        <span>{price}</span>
      </div>

      <div className="card-content">
        <div className="card-body">
          <p>{description}</p>
        </div>

        <div className="card-footer">
          <h4>Order a delivery <img src={scooter} alt="scooter" /></h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
