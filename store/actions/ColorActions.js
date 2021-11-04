// State to reset the color
export const TOGGLE_RESET = "colorset/reset";
export const TOGGLE_SET_COLOR = "colorset/set";
export const TOGGLE_SELECT_COLOR = "colorset/select";
export const TOGGLE_DESELECT_COLOR = "colorset/deselect";

export const toggleReset = () => {
  return { type: TOGGLE_RESET, selectedColor: null };
};

export const toggleSetColor = (colorSet) => {
  return { type: TOGGLE_SET_COLOR, selectedColor: colorSet };
};

export const toggleSelectColor = (colorSet) => {
  return { type: TOGGLE_SELECT_COLOR, selectedColor: colorSet };
};

export const toggleDeselectColor = (colorSet) => {
  return { type: TOGGLE_DESELECT_COLOR, selectedColor: colorSet };
};
