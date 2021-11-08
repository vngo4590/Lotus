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

// https://www.sitepoint.com/javascript-generate-lighter-darker-color/
export const ColorLuminance = (hex, lum) => {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
};

export const checkHexIsLight = (color) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};
