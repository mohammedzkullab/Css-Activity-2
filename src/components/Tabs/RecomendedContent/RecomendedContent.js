import Card from "../../Card/Card";
import Rating from "../../Rating/Rating";
import { MdLocationPin } from "react-icons/md";
import "./RecomendedContent.css"
const RecomendedContent = ({title ,rate , place}) => {
  return (
    <Card className="recomended-card">
      <div className="offers-card-top recomended-content-top">
        <img src="https://source.unsplash.com/260x200" alt="" />
        <Rating rate={rate} />
      </div>
      <div className="offers-card-body">
        <div className="offer-name">
          <p>{title}</p>
        </div>
        <div className="recomended-content-place">
       <MdLocationPin className="location"/>{place}
        </div>
      </div>
    </Card>
  );
};
export default RecomendedContent;