import { GET_MOOD, SET_BACKGROUND } from '../constants/actionTypes';

/* This reducer is here only to send the emotion we're feeling so we can return the
correct type of quote */

const initialState = {
  mood: null,
  currentImage: null,
  imageResults: null,
};

const moodReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOOD:
      return {
        ...state,
        mood: action.payload,
      };
    case SET_BACKGROUND: {
      const { imageResults, mood } = action.payload;
      console.log('in reducer', action.payload);
      if (imageResults.length) {
        const randomIdx = Math.floor(Math.random() * (imageResults.length));
        const currentImage = imageResults[randomIdx].src.original;
        return {
          ...state,
          mood,
          currentImage,
          imageResults,
        };
      }
      return state;
    }
    default: return state;
  }
};

export default moodReducer;
