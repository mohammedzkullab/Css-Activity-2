const TabContent = ({ id, activeTab, children,...props }) => {
  return activeTab === id ? <div className={props.className}>{children}</div> : null;
};

export default TabContent;
