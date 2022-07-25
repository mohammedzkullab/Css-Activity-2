import Dropdown from "../../Dropdown/Dropdown";
import { FaPlane } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsCalendarDate } from "react-icons/bs";
import "./SearchContent.css";

const SearchContent = () => {
  const options = [
    { label: "Dubai", value: "dubai" },
    { label: "Gaza", value: "gaza" },
    { label: "Dair", value: "Dair" },
  ];
  return (
    <>
      <div className="tab-content">
        <div className="tab-content-para">
          <p className="up">Living From</p>
          <p className="down">
            <Dropdown options={options} />
          </p>
        </div>
        <div className="middle">
          <FaPlane />
        </div>
        <div className="tab-content-para">
          <p className="up">Going To</p>
          <p className="down">
            <Dropdown options={options} />
          </p>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-content-para">
          <p className="up">
            Leave <FaPlane className="plane" />
          </p>
          <p className="down">
            <input type="date" value={new Date().toISOString()} />
          </p>
        </div>
        <div className="middle">
          <BsCalendarDate />
        </div>
        <div className="tab-content-para">
          <p className="up">
            Return <FaPlane className="icon plane" />
          </p>
          <p className="down">
            <input type="date" value={new Date().toISOString()} />
          </p>
        </div>
      </div>
      <div>
        <button className="search-btn">
          <GoSearch />
        </button>
      </div>
    </>
  );
};
export default SearchContent;
