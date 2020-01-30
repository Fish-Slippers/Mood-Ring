import { combineReducers } from 'redux';
import userReducer from './userReducer';
import moodReducer from './moodReducer';

export default combineReducers({
  userState: userReducer,
  moodState: moodReducer,
});
