const express = require('express');
const path = require('path');
const passport = require('passport');
require('dotenv').config();
// This passport config allows our passport strategies to be available in our middleware process
require('./services/strategies');

const app = express();
const PORT = 3000;

const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');

const userRouter = require('./Routes/userRoutes.js');
const authRouter = require('./Routes/authRoutes');
const apiRouter = require('./Routes/apiRoutes');

// max age is in milliseconds
// our secret will be used to encrypt our cookie when we send to browser
app.use(cookieSession({
  maxAge: 86400000,
  keys: [process.env.SECRET],
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(bodyParser.json());

// flow test for incoming requests
app.use((req, res, next) => {
  console.log(`
        ********* FLOW TEST **********
        MEDTHOD: ${req.method}
        URL: ${req.url}
        BODY: ${JSON.stringify(req.body)}
      `);
  return next();
});

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.get('/test', (req, res) => {
  res.status(200);
})

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// conncection for externally hosted mongoDB
mongoose.connect(process.env.MONGO_URI);

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);


// golbal error handler for middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

// app.listen(PORT, () => {
//   console.log('listening on port', PORT);
// });


module.exports = app;
