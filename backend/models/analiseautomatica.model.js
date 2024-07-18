const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

const AnaliseAutomatica = sequelize.define("analiseAutomatica",{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produtorNome: {
    type: DataTypes.STRING,
  },
  produtorCpf: {
    type: DataTypes.STRING,
  },
  propriedadeNome: {
    type: DataTypes.STRING,
  },
  car: {
    type: DataTypes.STRING,
  },
  municipio: {
    type: DataTypes.STRING,
  },
  uf: {
    type: DataTypes.STRING,
  },
  estadoMonitoramento: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.TINYINT,
  },
  },{
    timestamps: false,
    tableName: 'analiseAutomatica',
 });

sequelize.sync().then(() => {
  console.log('Tabela de Analise Automática conectada com sucesso!');
}).catch((error) => {
  console.error('Não foi possível consultar tabela : ', error);
});

module.exports = AnaliseAutomatica;