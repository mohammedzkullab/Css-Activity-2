import Card from "../../Card/Card";
import "./OfferCard.css"
const OfferCard = ({date,title , duration , type , price,priceFor}) => {
  return (
    <Card>
      <div className="offers-card-top">
        <img src="https://source.unsplash.com/200x200" alt="" />
        <p>{date}</p>
      </div>
      <div className="offers-card-body">
        <div className="offer-details">
          <p className="offer-details_type">{type}</p>
          <p className="offer-details_duration">{duration}</p>
        </div>
        <div className="offer-name">
          <p>{title}</p>
        </div>
        <div className="offer-price">
          <p>
            {price}$<span>/{priceFor}</span>
          </p>
          <button className="btn primery-btn">Book Now</button>
        </div>
      </div>
    </Card>
  );
};
export default OfferCard;
