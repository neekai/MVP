const Sequelize = require('sequelize');
let db = new Sequelize('mvp', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
  .then(() => {
      console.log("successfully connected to db")
  })
  .catch(err => {
      console.log("error connecting to db", err)
  });

  module.exports = { db };