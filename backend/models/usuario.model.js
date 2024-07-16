const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/connection');

const Usuario = sequelize.define("usuario",{
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nomeUsuario: {
    type: DataTypes.STRING,
    allowNull:false
  },
  emailUsuario: {
    type: DataTypes.STRING,
    allowNull:false
  },
  senhaUsuario: {
    type: DataTypes.STRING,
    allowNull:false
  },
  descricaoCargo: {
    type: DataTypes.STRING,
    allowNull:false
  },
  industria: {
    type: DataTypes.STRING,
    allowNull:false
  },
  },{
    timestamps: false,
    tableName: 'usuarios',
 });

sequelize.sync().then(() => {
  console.log('Tabela de Usuarios conectada com sucesso!');
}).catch((error) => {
  console.error('Não foi possível consultar tabela : ', error);
});

module.exports = Usuario;