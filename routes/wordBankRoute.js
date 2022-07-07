const express = require('express');
const router = express.Router();
const {
  getWord,
  setWord,
  updateWord,
  deleteWord,
} = require('../controllers/wordsController');

router.route('/').get(getWord).post(setWord);
router.route('/:id').delete(deleteWord).put(updateWord);

module.exports = router;
