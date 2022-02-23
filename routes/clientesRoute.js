const { Router } = require('express')
const ClientesController = require('../controllers/ClientesControllers')

const route = Router()

route.get('/clientes', ClientesController.getAllClientes)
route.get('/clientes/:cnpj', ClientesController.getAClientes)
route.post('/clientes', ClientesController.createUClientes)
route.put('/clientes/:cnpj', ClientesController.updateClientes)
route.delete('/clientes/:cnpj', ClientesController.deleteClientes)

module.exports = route