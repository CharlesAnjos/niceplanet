const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');
const Produtor = require('./produtor.model');

const Propriedade = sequelize.define("propriedade", {
  idPropriedade: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomePropriedade: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numeroCar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1
  },
  liberado: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'propriedades',
});

sequelize.sync().then(() => {
  console.log('Tabela de Propriedades conectada com sucesso!');
}).catch((error) => {
  console.error('Não foi possível consultar tabela : ', error);
});

module.exports = Propriedade;