const express = require('express');
const router = express.Router();
const PropriedadeModel = require('../models/propriedade.model');

module.exports = router;

router.get('/listar', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const data = await PropriedadeModel.findAll();
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
      const data = await PropriedadeModel.findOne({ where: { idPropriedade: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});