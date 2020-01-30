import * as types from '../constants/actionTypes';

export const register = (username, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  return (dispatch) => fetch('/register', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.REGISTER,
        payload: data,
      });
    });
}

export const login = (username, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  return (dispatch) => fetch('/login', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGIN,
        payload: data,
      });
    });
}

export const logout = () => {
  return (dispatch) => fetch('/logout')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGOUT,
        payload: data,
      });
    });
}

// Getting Images from API
export const setBackgroundImage = (mood) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mood }),
  };
  return (dispatch) => fetch('/api/images', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.SET_BACKGROUND,
        payload: {
          mood,
          imageResults: data,
        },
      });
    });
};

/* MOOD DATA */

export const sendMoodData = (username, date, mood) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      date,
      mood,
    }),
  };
  return (dispatch) => fetch('/user/mood', config)
    .then((response) => response.json())
    .then((data) => dispatch({
      type: types.GET_MOOD,
      payload: data,
    }))
    .catch((err) => console.log(err));
};
