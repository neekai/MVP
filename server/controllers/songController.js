const { Song } = require('../../database/models');

const songController = {
  FETCH: (req, res) => {
      Song.findAll({
          order: ['plays', 'DESC']
      },{ limit: 10 })
      .then(data => {res.status(200).send(data); console.log('successfully got data from db from songController', data)})
      .catch(err => {throw err; console.log("There was an error getting data from songController", err)})
  },

  SAVE: (req, res) => {
      const song = Song.create({
          songName: '',
          artist: '',
          plays: ''
      })
      .then(data => {res.status(201).send("added song to list"); console.log("successfully added song to db from songController")})
      .catch(err => {throw err; console.log('There was an error saving to db from songController')})
  }
}

module.exports = { songController };

