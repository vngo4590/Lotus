import { COLOR_SETS } from "../../data/dummy-data";
import {
  TOGGLE_RESET,
  TOGGLE_SET_COLOR,
  TOGGLE_SELECT_COLOR,
  TOGGLE_DESELECT_COLOR,
} from "../actions/ColorActions";

const initialState = {
  colors: COLOR_SETS,
  selectedColor: null,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_RESET:
      return { ...state, selectedColor: null };
    case TOGGLE_SET_COLOR:
      //   const existingIndex = state.colors.findIndex(
      //     (color) => color.id === action.id
      //   );
      return { ...state, selectedColor: action.selectedColor };
    case TOGGLE_SELECT_COLOR:
      if (action.selectedColor) {
        return {
          ...state,
          colors: state.colors.map((color) => {
            if (color.id !== action.selectedColor.id) {
              color.active = false;
            } else {
              color.active = true;
            }
            return color;
          }),
        };
      }
      return state;
    case TOGGLE_DESELECT_COLOR:
      if (action.selectedColor) {
        return {
          ...state,
          colors: state.colors.map((color) => {
            if (color.id === action.selectedColor.id) {
              color.active = false;
            }
            return color;
          }),
        };
      }
      return state;
    default:
      return state;
  }
};

export default colorReducer;
