import React from "react";

const HighlightTwo = ({
  width = "300",
  height = "30",
  viewBox = "0 0 266 12",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L266 12H0V0Z" fill="#FFDC60" />
    </svg>
  );
};

export default HighlightTwo;
