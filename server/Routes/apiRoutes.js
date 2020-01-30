const express = require('express');

const router = express.Router();
const apiController = require('../Controllers/apiController');

router.post('/images', apiController.getImages, (req, res) => {
  return res.status(200).json(res.locals.images);
});

router.get('/quotes', apiController.getQuotes, (req, res) => {
  return res.status(200).json(res.locals.quotes);
});

module.exports = router;
