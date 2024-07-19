const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');
const Propriedade = require('./propriedade.model');

const Produtor = sequelize.define("produtor", {
  idProdutor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  registroIndividual: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nomeProdutor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
}, {
  timestamps: false,
  tableName: 'produtores',
});

sequelize.sync().then(() => {
  console.log('Tabela de Produtores conectada com sucesso!');
}).catch((error) => {
  console.error('Não foi possível consultar tabela : ', error);
});

Propriedade.belongsToMany(Produtor, {
  through: "vinculos",
  as: "produtores",
  foreignKey: "idPropriedade",
  timestamps: false,
});

Produtor.belongsToMany(Propriedade, {
  through: "vinculos",
  as: "propriedades",
  foreignKey: "idProdutor",
  timestamps: false,
});

module.exports = Produtor;