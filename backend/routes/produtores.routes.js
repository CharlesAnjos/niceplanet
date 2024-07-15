const express = require('express');
const router = express.Router();
const ProdutorModel = require('../models/produtor.model');

module.exports = router;

router.get('/listar', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const data = await ProdutorModel.findAll();
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
      const data = await ProdutorModel.findOne({ where: { idProdutor: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});