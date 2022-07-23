import "./Rating.css"
import { FaStar } from "react-icons/fa";
const Rating = ({ rate }) => {
  return (
    <span>
      <FaStar className="rate-star" /> {rate}
    </span>
  );
};
export default Rating;
