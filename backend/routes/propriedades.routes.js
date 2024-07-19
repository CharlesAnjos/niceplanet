const express = require('express');
const router = express.Router();
const PropriedadeModel = require('../models/propriedade.model');
const AnaliseAutomaticaModel = require('../models/analiseautomatica.model');
const ProdutorModel = require('../models/produtor.model');

module.exports = router;

router.get('/listar', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const data = await PropriedadeModel.findAll({
        include: [{
          model: ProdutorModel,
          as: "produtores",
        },
      ],
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
      const data = await PropriedadeModel.findOne({ where: { idPropriedade: id } });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});

router.get('/car/:car', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
      const car = req.params.car;
      const data = await PropriedadeModel.findOne({ 
        where: { numeroCar: car },
        include: [{
          model: ProdutorModel,
          as: "produtores",
        },
      ],
      });
      await AnaliseAutomaticaModel.create({
        produtorNome: data.produtores[0].nomeProdutor,
        produtorCpf: data.produtores[0].registroIndividual,
        propriedadeNome: data.nomePropriedade,
        car: data.numeroCar,
        municipio: data.municipio,
        uf: data.uf,
        estadoMonitoramento: data.liberado,
        status: data.status,
      });
      res.json(data);
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
});