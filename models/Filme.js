const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    nome: String,
    diretor: String,
    genero: String
});

module.exports = Filme;