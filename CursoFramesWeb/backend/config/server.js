//porta para backend.
const port = 3003

// Definindo dependências.
const bodyParser = require('body-parser')
// Framework web.
const express = require('express')
const server = express()
//Criando servidor.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server