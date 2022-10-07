import React from "react";

const Margin = ({ color }) => {
  return <div className={`pt-200 ${color ? color : ""}`}></div>;
};

export default Margin;
