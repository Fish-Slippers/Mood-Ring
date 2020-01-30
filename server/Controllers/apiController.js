const fetch = require('node-fetch');

const apiController = {};

//  helper function to return a proper search query based on mood
const getMood = (mood) => {
  switch (mood) {
    case 'excited':
    case 'happy':
      return 'sunrise';
    case 'anxious':
      return 'ocean';
    case 'sad':
      return 'nature';
    case 'relaxed':
    case 'distracted':
      return 'relax';
    case 'frustrated':
    case 'tired':
      return 'peace';
    default:
      return 'beach';
  }
};

apiController.getImages = (req, res, next) => {
  const searchQuery = getMood(req.body.mood);
  fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=15&page=1`, {
    headers: {
      Authorization: process.env.PEXELS_API,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      res.locals.images = data.photos;
    })
    .then(next)
    .catch((err) => next({
      log: err,
      message: {
        err: 'Error in the apiController.getImages controller. See logs for error',
      },
    }));
};

function chooseAuthor(quote, array, num) {
  if (quote.author === null) {
    return `"${quote.text}" - Jon Gonzalez, ${array[num]}`;
  }
  return `"${quote.text}" --${quote.author}`;
}

apiController.getQuotes = (req, res, next) => {
  fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
      const titlesArray = ['Ph.D.', 'M.D.', 'J.D.', 'Esq.', 'the Third', 'Scholar', 'Attorney at Law', 'Duchess of Cambridge', 'His Majesty', 'The Reverend', 'Viscount of Hereford', '7th Baron of Cromwell', 'Spiritual Leader', 'Life Coach, Inspirational Speaker', 'Frontend Master'];
      const randomTitleNum = Math.floor(Math.random() * (titlesArray.length));
      const randomNum = Math.floor(Math.random() * 1620);
      res.locals.quotes = chooseAuthor(data[randomNum], titlesArray, randomTitleNum);
    })
    .then(next);
};

module.exports = apiController;
