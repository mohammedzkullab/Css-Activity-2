import './Card.css'
const Card = (props) => {
    const classes = props.className?props.className :"" ;
  return(
    <div className={"card " + classes}>
        {props.children}
    </div>
  );
};

export default Card;