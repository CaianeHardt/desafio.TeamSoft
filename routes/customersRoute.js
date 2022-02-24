const { Router } = require('express')
const CustomersController = require('../controllers/CustomersControllers')

const route = Router()

route.get('/customers', CustomersController.getAllCustomers)
route.get('/customers/:cnpj', CustomersController.getCustomers)
route.post('/customers', CustomersController.createCustomers)
route.put('/customers/:id', CustomersController.updateCustomers)
route.delete('/customers/:id', CustomersController.deleteCustomers)

module.exports = route