const { Router } = require('express')
const CustomersController = require('../controllers/CustomersControllers')

const route = Router()

route.get('/customers', CustomersController.getAllCustomers)
route.get('/customer/:cnpj', CustomersController.getCustomer)
route.post('/customer', CustomersController.createCustomer)
route.put('/customer/:id', CustomersController.updateCustomer)
route.delete('/customer/:id', CustomersController.deleteCustomer)

module.exports = route