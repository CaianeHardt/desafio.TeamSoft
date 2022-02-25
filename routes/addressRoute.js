const { Router } = require('express')
const AddressController = require('../controllers/AddressControllers')

const route = Router()

route.get('/addresses', AddressController.getAllAddresses)
route.get('/address/:id', AddressController.getAddress)
route.post('/customers/:userId/address/', AddressController.createAddress)
route.put('/address/:id', AddressController.updateAddress)
route.delete('/address/:id', AddressController.deleteAddress)

module.exports = route
