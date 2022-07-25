import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Dropdown.css";
const Dropdown = (props) => {
  const [value, setValue] = useState("fruit");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <select value={value} className="dropdown" onChange={handleChange}>
        {props.options.map((op) => {
          return <option value={op.value}>{op.label}</option>;
        })}
      </select>
      <FaChevronDown className="chevron" />
    </>
  );
};
export default Dropdown;
