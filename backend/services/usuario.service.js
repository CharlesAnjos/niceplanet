const config = require('../config.json');
const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/usuario.model');

async function authenticate({ emailUsuario, senhaUsuario }) {
    const usuario = await UsuarioModel.findOne({ attributes: ['idUsuario','nomeUsuario', 'emailUsuario'], where: { emailUsuario: emailUsuario, senhaUsuario: senhaUsuario } });

    if (!usuario) throw 'Usuário ou senha estão incorretos';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: usuario.idUsuario }, config.secret, { expiresIn: '7d' });

    return {
        ...omitirSenha(usuario),
        token
    };
}

function omitirSenha(usuario) {
    const { senhaUsuario, ...usuarioSemSenha } = usuario;
    return usuarioSemSenha;
}

module.exports = {authenticate};