
const mongoose = require('mongoose');
const babelpolyfill = require('@babel/polyfill');
const Mood = require('../server/Models/moodModel');

beforeAll( async (done) => {
   await mongoose.connect('mongodb+srv://moodring:moody@moods-ggoun.mongodb.net/test?retryWrites=true&w=majority');
  done();
});

describe('testing mood database', () => {
  expect.assertions(1);
  it('should fetch from database based on mood sent', async (done) => {
    const moodQuery = { mood: 'happy' };
    const result = await Mood.find(moodQuery);
    expect(result[0].responses).toBeTruthy();
    done();
  });
});
