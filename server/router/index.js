const router = require('express').Router();
const { insultController } = require('../controllers/insultController.js');
const { punchLineController } = require('../controllers/punchLineController.js');

router.route('/insults')
      .get(insultController.FETCH)
      .post(insultController.SAVE);

router.route('/punch')
      .get(punchLineController.FETCH);

module.exports = { router };