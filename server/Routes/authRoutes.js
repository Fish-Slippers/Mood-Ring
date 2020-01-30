const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google', passport.authenticate('google', {
  // as a part of the passport middleware process, we are expecting the profile info back from Google
  scope: ['profile'],
}));

router.get('/google/redirect', (req, res, next) => {
  passport.authenticate('google', (err, user) => {
    // if passport authenticate errors out
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error trying to authenticate user. Check log for err',
        },
      });
    }
    // if the user credentials are invalid we won't get a user back
    if (!user) return res.redirect('/user/login?err=error-with-login');
    const { username } = user.rows[0];
    return res.status(200).redirect(`/?user=${username}`);
  })(req, res, next); // passport is using a closure to pass the correct req, res and next values
});

router.get('/spotify', passport.authenticate('spotify', {
  scope: ['user-read-email', 'user-read-private'],
}));

router.get('/spotify/redirect', (req, res, next) => {
  passport.authenticate('spotify', (err, user) => {
    if (err) {
      return next({
        log: err,
        message: {
          err: 'Error trying to authenticate user. Check log for err',
        },
      });
    }
    if (!user) return res.redirect('/user/login?err=error-with-login');
    const { username } = user.rows[0];
    return res.status(200).redirect(`/?user=${username}`);
  })(req, res, next);
});


module.exports = router;
