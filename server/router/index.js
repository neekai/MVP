const router = require('express').Router();
const { songController } = require('../controllers/songController.js')

router.route('/songs')
      .get(songController.FETCH)
      .post(songController.SAVE);

module.exports = { router };