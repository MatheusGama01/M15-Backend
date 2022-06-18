const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    nome: String,
    diretor: String,
    genero: String,
    opiniao: String,
    perfil: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil', required: true},
});

module.exports = Filme;