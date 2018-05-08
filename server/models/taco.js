const Sequelize = require('sequelize');
const db = require('./_db');

const Taco = db.define('taco', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  spicy: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

module.exports = Taco;
