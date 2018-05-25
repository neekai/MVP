const Sequelize = require('sequelize');
const { db } = require('../config');

// const SongList = db.define('songList', {
//   listName: Sequelize.STRING, 

// })

const Song = db.define('song', {
    songName: { type: Sequelize.STRING, unique: true},
    artist: Sequelize.STRING,
    plays: Sequelize.INTEGER,

});

module.exports = {
    Song,
}