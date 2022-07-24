import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import "./Comment.css";
const Comment = ({content,writer,slogen}) => {
  return (
  <Card className="comment">
    <p className="comment-content">{content}</p>
    <p className="comment-writer">- {writer}</p>
    <p className="comment-slogen">{slogen}</p>
    <div className="comment-image">
        <img src="https://source.unsplash.com/100x100" alt=""/>
        <Rating rate="3.3" className="comment-rating"/>
    </div>
  </Card>);
};
export default Comment;
