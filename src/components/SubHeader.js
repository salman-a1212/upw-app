import React from "react";

const SubHeader = ({ subheader, style }) => {
  return (
    <div
      style={{
        fontSize: `${style.fontSize}`,
        margin: `${style.margin}`,
        color: `${style.color}`,
      }}
    >
      {subheader}
    </div>
  );
};

export default SubHeader;
