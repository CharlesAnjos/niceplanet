const express = require('express');
const router = express.Router();
const AnaliseAutomaticaModel = require('../models/analiseautomatica.model');

module.exports = router;

router.get('/listar', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const data = await AnaliseAutomaticaModel.findAll();
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
      const data = await AnaliseAutomaticaModel.findOne({ where: { id: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});

router.delete('/deletar/:id', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const id = req.params.id;
      const data = await AnaliseAutomaticaModel.destroy({ where: { id: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});