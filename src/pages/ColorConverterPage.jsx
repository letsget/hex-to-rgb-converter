import React from "react";
import ConvertedValue from "../components/ConvertedValue";
import Form from "../components/Form";
import { useSelector } from "react-redux";

const ColorConverterPage = () => {
  const bgColor = useSelector(({ app: { bgColor } }) => bgColor);
  const error = useSelector(({ app: { error } }) => error);
  const errorMessage = useSelector(({ app: { errorMessage } }) => errorMessage);
  const bg = error ? "#dc3545" : bgColor;

  console.log(error);

  return (
    <div className="container" style={{ backgroundColor: `${bg}` }}>
      <div>
        <Form bgColor={bgColor} error={error} bg={bg} />
        <ConvertedValue
          errorMessage={errorMessage}
          bgColor={bgColor}
          error={error}
        />
      </div>
    </div>
  );
};

export default ColorConverterPage;
