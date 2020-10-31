import React from "react";
import { setBgColor, setError } from "../actions";
import { useDispatch } from "react-redux";
import { parseHexValue } from "../helpers";

const VALID_HEX_LENGTH = 7;

const Form = () => {
  const dispatch = useDispatch();

  const handleColorChange = ({ target: { value } }) => {
    const len = value.length;
    if (len === VALID_HEX_LENGTH) {
      try {
        dispatch(setError(false));
        const hex = parseHexValue(value);
        dispatch(setBgColor(hex));
      } catch (err) {
        dispatch(setError(true));
      }
    } else if (len > VALID_HEX_LENGTH) {
      dispatch(setError(true));
    }
  };

  return (
    <form>
      <input
        className="color-input"
        placeholder="hex value"
        type="text"
        onChange={handleColorChange}
      />
    </form>
  );
};

export default Form;
