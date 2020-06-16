// Mongoose é o responsável por fazer a conexão com o MongoDB.
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')