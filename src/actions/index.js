// ACTIONS AND TYPES
export const SET_BG_COLOR = "SET_BG_COLOR";
export const SET_ERROR = "SET_ERROR";

export const setBgColor = (color) => {
  return {
    type: SET_BG_COLOR,
    payload: color,
  };
};

export const setError = (value) => {
  return {
    type: SET_ERROR,
    payload: value,
  };
};
