import NavLink from "./NavLink/NavLink";
import "./Navbar.css";
const Navbar = () => {
  // const navbar = document.querySelector(".nav");
  // window.onscroll = () => {
  //   if (window.scrollY > 100) {
  //     navbar.classList.add("nav-active");
  //   } else {
  //     navbar.classList.remove("nav-active");
  //   }
  // };
  return (
    <nav className="nav">
      <div className="logo">Treloo</div>
      <ul className="nav-links">
        <NavLink linkpath="#Review">Review</NavLink>
        <NavLink linkpath="#Tips">Tips</NavLink>
        <NavLink linkpath="#Alerts">Alerts</NavLink>
        <NavLink linkpath="#Blog">Blog</NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
