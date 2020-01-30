import { REGISTER, LOGIN, LOGOUT } from '../constants/actionTypes';

const initialState = {
  currentUser: '',
  loggedIn: false,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case LOGIN:
      if (action.payload === null) {
        return state;
      }
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: '',
        loggedIn: false,
      };
    default: return state;
  }
};

export default userReducers;
