const express = require('express');
const bodyParser = require("body-parser");

const produtoresRoutes = require('./routes/produtores.routes');
const propriedadesRoutes = require('./routes/propriedades.routes');

const app = express();

app.use(express.json());
app.use('/produtores',produtoresRoutes);
app.use('/propriedades',propriedadesRoutes);
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(3000, () => {
  console.log(`Servidor iniciado na porta ${3000}`);
});

