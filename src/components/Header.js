import React from "react";

const Header = ({ header, style }) => {
  return (
    <div
      style={{
        fontSize: `${style.fontSize}`,
        margin: `${style.margin}`,
        color: `${style.color}`,
      }}
    >
      {header}
    </div>
  );
};

export default Header;
