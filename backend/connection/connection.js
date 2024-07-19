const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'niceplanet',
  'root',
  'pass',
  {
    host: 'niceplanet_db',
    dialect: 'mysql'
  }
);

module.exports = sequelize;