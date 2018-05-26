const Sequelize = require('sequelize');
const { db } = require('../config');

// const SongList = db.define('songList', {
//   listName: Sequelize.STRING, 

// })

const Insult = db.define('insult', {
    punchLine: { type: Sequelize.STRING, unique: true}

});

db.sync({ force: true });

module.exports = {
    Insult,
}