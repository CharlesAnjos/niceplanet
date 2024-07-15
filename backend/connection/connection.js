const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'niceplanet',
  'root',
  'pass',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;