import "./NavLink.css";
const NavLink = (props) => {
  const clickHandler = (e) => {
    console.log(e , "clicked")
  };
  return (
    <li className={props.liclass}>
      <a className={"nav-link " + props.aclass} href={props.linkpath} onClick={clickHandler}>
        {props.children}
      </a>
    </li>
  );
};
export default NavLink;
