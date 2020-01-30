import { REGISTER, LOGIN, LOGOUT, GET_QUOTE } from '../constants/actionTypes';

const initialState = {
  currentUser: '',
  loggedIn: false,
  quote: '',
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
    case GET_QUOTE:
      return {
        ...state,
        quote: action.payload,
      };
    default: return state;
  }
};

export default userReducers;
