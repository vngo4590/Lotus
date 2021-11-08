export const TOGGLE_SET_USER = "user/set";
export const TOGGLE_TOP_UP_USER = "user/increment";
export const setUser = (user) => {
  return { type: TOGGLE_SET_USER, currentUser: user };
};
export const topupUser = () => {
  return { type: TOGGLE_TOP_UP_USER };
};
