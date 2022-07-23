const TabNavItem = ({ id,activeTab, setActiveTab , ...props }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "tab-nav tab-active" : "tab-nav"}>
      {props.children}
    </li>
  );
};
export default TabNavItem;
