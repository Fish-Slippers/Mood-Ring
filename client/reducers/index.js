import { combineReducers } from 'redux';
import userReducers from './userReducers';
import moodReducer from './moodReducer';

export default combineReducers({
  userState: userReducers,
  moodState: moodReducer,
});
