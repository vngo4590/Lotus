import { USERS } from "../../data/dummy-data";
import { TOGGLE_SET_USER, TOGGLE_TOP_UP_USER } from "../actions/UserActions";

const initialState = {
  users: USERS,
  currentUser: USERS[0],
};

const userSetReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SET_USER:
      return { ...state, currentUser: action.currentUser };
    case TOGGLE_TOP_UP_USER:
      state.currentUser.streak += 1;
      return { ...state, currentUser: state.currentUser };
    default:
      return state;
  }
};

export default userSetReducer;
