import React from "react";

const ConvertedValue = ({ errorMessage, error, bgColor }) => {
  return (
    <div className="converted-value">{error ? errorMessage : bgColor}</div>
  );
};

export default ConvertedValue;
