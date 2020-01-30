import * as types from '../constants/actionTypes';

export function register(username, password) {
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
  return (dispatch) => fetch('/user/register', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.REGISTER,
        payload: data,
      });
    });
}

export function login(username, password) {
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
  return (dispatch) => fetch('/user/login', config)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGIN,
        payload: data,
      });
    });
}

export function logout() {
  return (dispatch) => fetch('/logout')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: types.LOGOUT,
        payload: data,
      });
    });
}

export function getQuote(quote) {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quote,
    }),
  };
  return (dispatch) => fetch('https://type.fit/api/quotes', config)
    .then((res) => res.json())
    .then((data) => {
      const titlesArray = ['Ph.D.', 'M.D.', 'J.D.', 'Esq.', 'the Third', 'Scholar', 'Attorney at Law', 'Duchess of Cambridge', 'His Majesty', 'The Reverend', 'Viscount of Hereford', '7th Baron of Cromwell', 'Spiritual Leader', 'Life Coach, Inspirational Speaker', 'Frontend Master'];
      const randomTitleNum = Math.floor(Math.random() * (titlesArray.length));
      const randomNum = Math.floor(Math.random() * 1620);
      if (data[randomNum].author === null) {
        data = `"${data[randomNum].text}" - Jon Gonzalez, ${titlesArray[randomTitleNum]}`;
      } else {
        data = `"${data[randomNum].text}" --${data[randomNum].author}`;
      }
    })
    .then((fullQuote) => {
      dispatch({
        type: types.GET_QUOTE,
        payload: fullQuote,
      });
    });
}

/* MOOD DATA */

export const sendMoodData = (username, date, mood) => (dispatch) => {
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
  fetch('/user/mood', config)
    .then((response) => response.json())
    .then((data) => dispatch({
      type: types.GET_MOOD,
      payload: data,
    }))
    .catch((err) => console.log(err));
};
