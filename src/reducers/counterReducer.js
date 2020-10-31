import { SET_ERROR, SET_BG_COLOR } from "../actions";

const initialState = {
  error: false,
  bgColor: "",
  errorMessage: "Ошибка",
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BG_COLOR:
      return {
        ...state,
        bgColor: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
