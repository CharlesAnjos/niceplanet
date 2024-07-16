const config = require('../config.json');
const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuario.model');

async function authenticate({ emailUsuario, senhaUsuario }) {
    const user = await UsuarioModel.findOne({ where: { emailUsuario: emailUsuario, senhaUsuario: senhaUsuario } });

    if (!user) throw 'Username or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.idUsuario }, config.secret, { expiresIn: '7d' });

    return {
        token
    };
}

module.exports = {authenticate};