const { Insult } = require('../../database/models');

const insultController = {
  FETCH: (req, res) => {
      Insult.findAll({
          order: [Sequelize.fn('RAND')]
      },{ limit: 10 })
      .then(data => {res.status(200).send(data); console.log('successfully got data from db from insultController', data)})
      .catch(err => {throw err; console.log("There was an error getting data from insultController", err)})
  },

  SAVE: (req, res) => {
      const insult = Insult.create({
          punchLine: '',
      })
      .then(data => {res.status(201).send("added insult to list"); console.log("successfully added insult to db from insultController")})
      .catch(err => {throw err; console.log('There was an error saving to db from insultController')})
  }
}

module.exports = { insultController };

