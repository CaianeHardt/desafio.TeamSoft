const database = require('../models');

class CustomersController {

  static async getAllCustomers(req, res){
    try {
      const allCustomers = await database.Customers.findAll()
      return res.status(200).json(allCustomers)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getCustomers(req, res) {
    const { cnpj } = req.params
    try {
      const aCustomers = await database.Customers.findOne( { 
        where: { 
          cnpj: String(cnpj) 
        }
      })
      return res.status(200).json(aCustomers)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createCustomers(req, res) {
    const newCustomer = req.body
    const nodeCnpj = require('node-cnpj')
    
    newCustomer.cnpj = nodeCnpj.unMask(newCustomer.cnpj)
    if (!nodeCnpj.validate(newCustomer.cnpj)) {
      return res.status(400).json("Invalid CNPJ")
    }

    try {
      const newCustomerCreated = await database.Customers.create(newCustomer)
      return res.status(200).json(newCustomerCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateCustomers(req, res) {
    const { id } = req.params
      const newInfo = req.body
      try {
        await database.Customers.update(newInfo, { where: { id: Number(id) }})
        const updatedCustomer = await database.Customers.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedCustomer)
      } catch (error) {
        return res.status(500).json(error.message)
      }
  }

  static async deleteCustomers(req, res) {
    const { id } = req.params
    try {
      await database.Customers.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
  
module.exports = CustomersController