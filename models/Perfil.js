const mongoose = require('mongoose');

const Perfil = mongoose.model('Perfil', {
    nome: String,
    email: String,
    senha: String,
    admin: Boolean
});

module.exports = Perfil;