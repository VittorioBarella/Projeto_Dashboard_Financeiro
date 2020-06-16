const express = require('express')

module.exports = function (server) {
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Rotas da API 
    const bilingCycleService = require('../api/bilingCycle/bilingCycleService')
    bilingCycleService.register(router, '/bilingCycles')
}