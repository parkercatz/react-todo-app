import React from "react";

export const ColorfulMessage = ({ color, children }) => {
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};
