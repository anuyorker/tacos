const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tacos', {
  logging: false
});

module.exports = db;
