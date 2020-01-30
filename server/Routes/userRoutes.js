const express = require('express');

const router = express.Router();

const userController = require('../Controllers/userController');
const moodController = require('../Controllers/moodController');

// functionality for creating a new user and storing user in database
router.post('/register', userController.createUser, (req, res) => res.status(200).json({ username: res.locals.username }));

// funcionality for logging in without oauth
router.post('/login', userController.login, moodController.sendUserMoods, (req, res) => res.status(200).json({ username: res.locals.username, userMoods: res.locals.userMoods }));

// router.get('/logout', (req, res) => {

// });


// functionality for saving user's mood and sending mood response back to front end
router.post('/mood', moodController.saveMood, moodController.sendMoodResponse, (req, res) => {
  console.log('res.locals.response is: ', res.locals.response);
  // sending back response to the front end in json
  return res.status(200).json(res.locals.response);
});

module.exports = router;
