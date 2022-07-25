import { useRef } from "react";
import NavLink from "./NavLink/NavLink";
import "./Navbar.css";
const Navbar = () => {
  const navbar = useRef("");
  window.onscroll = () => {
    if (window.scrollY > 100) {
      navbar.current.classList.add("nav-active");
    } else {
      navbar.current.classList.remove("nav-active");
    }
  };
  return (
    <nav className="nav" ref={navbar}>
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
