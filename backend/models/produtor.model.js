const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

const Produtor = sequelize.define("produtor",{
  idProdutor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  registroIndividual: {
    type: DataTypes.STRING,
    allowNull:false
  },
  nomeProdutor: {
    type: DataTypes.STRING,
    allowNull:false
  },
  status: {
    type: DataTypes.TINYINT,
    allowNull:false
  },
  },{
    timestamps: false,
    tableName: 'produtores',
 });

sequelize.sync().then(() => {
  console.log('Tabela de Produtores conectada com sucesso!');
}).catch((error) => {
  console.error('Não foi possível consultar tabela : ', error);
});

module.exports = Produtor;