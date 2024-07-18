const express = require('express');
const router = express.Router();
const UsuarioModel = require('../models/usuario.model');

module.exports = router;

router.get('/listar', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const data = await UsuarioModel.findAll({
        attributes: ['idUsuario','nomeUsuario', 'emailUsuario'],
      });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});

router.get('/consultar/:id', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const id = req.params.id;
      const data = await UsuarioModel.findOne({ where: { idUsuario: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});