const { Insult } = require('../../database/models');
const Sequelize = require('sequelize');

const insultController = {
  FETCH: (req, res) => {
      Insult.findAll({
          order: [Sequelize.fn('RAND')]
      },{ limit: 10 })
      .then(data => {res.status(200).send(data); console.log('successfully got data from db from insultController', data)})
      .catch(err => {throw err; res.status(404); console.log("There was an error getting data from insultController", err)})
  },

  SAVE: (req, res) => {
      const insult = Insult.create({
          punchLine: req.body.insult,
      })
      .then(data => {res.status(201).send("added insult to list"); console.log("successfully added insult to db from insultController")})
      .catch(err => {throw err; res.status(404); console.log('There was an error saving to db from insultController')})
  },

  DESTROY: (req, res) => {
      console.log('This is the insult to be deleted..', req.query)
      Insult.destroy({
          where: {
              punchLine: req.query.insultToDelete
          }
      })
      .then(data => {res.status(200).send("deleted insult from db");})
      .catch(err => {throw err; res.status(404); console.log('There was an err deleting from db')})
  }
}

module.exports = { insultController };

