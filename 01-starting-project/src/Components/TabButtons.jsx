import React from "react";

const TabButtons = ({ children, onSelect, isSelected }) => {
  // to output the value passed by the parent component , we can use props.children or
  // children here.
  //   const handleClick = () => {
  //the advantage of defining these event handler function inside the component function
  // is that they then have access to the component's props & states.
  //   };
  return (
    <li>
      {/* <button onClick={handleClick}>{children}</button> */}

      <button onClick={onSelect} className={isSelected ? "active" : undefined}>
        {/* to change the style of this button dynamically we are passing a prop isSelected as a truthy 
        value from parent component */}
        {children}
      </button>
    </li>
  );
};

export default TabButtons;
