const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const bodyParser = require("body-parser");

const servicoUsuario = require('./services/usuario.service');
const produtoresRoutes = require('./routes/produtores.routes');
const usuariosRoutes = require('./routes/usuarios.routes');
const propriedadesRoutes = require('./routes/propriedades.routes');
const analiseAutomaticaRoutes = require('./routes/analiseAutomatica.routes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(jwt());
app.use(errorHandler);

// bloco de autenticação
app._router.post('/authenticate', authenticate);

function authenticate(req, res, next) {
  servicoUsuario.authenticate(req.body)
      .then(user => res.json(user))
      .catch(next);
}
// bloco de autenticação

app.use('/usuarios',usuariosRoutes);
app.use('/produtores',produtoresRoutes);
app.use('/propriedades',propriedadesRoutes);
app.use('/analises',analiseAutomaticaRoutes);

app.listen(3000, () => {
  console.log(`Servidor iniciado na porta ${3000}`);
});