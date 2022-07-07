const asyncHandler = require('express-async-handler');
const WordBank = require('../models/wordsModel');

// route GET /api/words


const getWord = asyncHandler(async (req, res) => {
  try {
    const words = await WordBank.find();
    res.status(200).json(words);
  } catch (err) {
    res.status(500).send({ error: 'internal server error' });
  }
});

// route POST /api/wordBank

const setWord = asyncHandler(async (req, res) => {

  const wordData = req.body.wordData;
  try {
    wordData.forEach(async (word) => {
      const { hebrew, arabic, Hspelling, Aspelling } = word;

      const newWord = await WordBank.create({
        hebrew: hebrew,
        arabic: arabic,
        Hspelling: Hspelling,
        Aspelling: Aspelling,
      });
    });
    res.status(200).json({ message: 'successfully words added to database.' });
  } catch (err) {
    res.status(500).json({ error: 'internal server error.' });
  }

});
// des update word
// route PUT /api/word/:id

const updateWord = asyncHandler(async (req, res) => {
  const word = await word.findById(req.params.id);

  if (!word) {
    res.status(404);
    throw new Error('word not found');
  }

  const updatedWord = await word.findByIdAndUpdate();
  res.status(200).json(updatedWord);
});
// des get account
// route DELETE /api/accounts/:id

const deleteWord = asyncHandler(async (req, res) => {
  const word = await word.findById(req.params.id);
  if (!word) {
    res.status(404);
    throw new Error('word not found');
  }

  await word.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {

  getWord,
  setWord,
  updateWord,
  deleteWord,

};
