const Mood = require('../Models/moodModel');
const db = require('../Models/db');

const moodController = {};

// function to store mood in calendar database
moodController.saveMood = (req, res, next) => {
    // obj destructuring to pull variables out of request body
    const { mood, date, username } = req.body;
    // query string for finding logged in user in users table
    const findQueryString = 'SELECT id FROM users WHERE username = $1';
    db.query(findQueryString, [username], (err, response) => {
        if (err) return next({ log: err, message: { err: 'Error finding user in moodController.saveMood. Check log' } }); 
        // intializing variable with user id
        const user_id = response.rows[0].id;
        // query string for storing mood in calendar table 
        const insertQueryString = 'INSERT INTO calendar(date, mood, user_id) VALUES($1, $2, $3)'
        const values = [date, mood, user_id];
        db.query(insertQueryString, values, (err, response) => {
            if (err) return next({ log: err, message: { err: 'Error saving calendar data in moodController.saveMood. check log '} });
            // return to next middleware
            return next();
        })
    })
}

// function to send mood response
moodController.sendMoodResponse = (req, res, next) => {
    // obj destructuring to pull mood out of request body
    const { mood } = req.body;
    Mood.findOne( { mood: mood }, 'responses', (err, mood) => {
        const random = Math.floor(Math.random() * Math.floor(mood.responses.length));
        // store random response in res.locals
        res.locals.response = mood.responses[random];
        // return to next middleware
        return next();
    });
};




module.exports = moodController;