import "./Rating.css"
import { FaStar } from "react-icons/fa";
const Rating = (props) => {
  return (
    <span className={"star-holder "+props.className} >
      <FaStar className="rate-star" /> {props.rate}
    </span>
  );
};
export default Rating;
