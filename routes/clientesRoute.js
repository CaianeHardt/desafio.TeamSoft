const { Router } = require('express')
const ClientesController = require('../controllers/ClientesControllers')

const route = Router()

route.get('/clientes', ClientesController.getAllClientes)
route.get('/clientes/:cnpj', ClientesController.getAClientes)
route.post('/clientes', ClientesController.createUClientes)
route.put('/clientes/:id', ClientesController.updateClientes)
route.delete('/clientes/:id', ClientesController.deleteClientes)

module.exports = route