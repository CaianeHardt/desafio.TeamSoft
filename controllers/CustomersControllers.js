const database = require('../models');

class CustomersController {

  static async createCustomer(req, res) {
    const newCustomer = req.body

    if (newCustomer.corporateName == null || newCustomer.contactName == null) {
      return res.status(400).json("Not all mandatory fields were sent (cnpj, corporateName, contactName and contact)")
    }
    const nodeCnpj = require('node-cnpj')
    const telefoneParse = require('telefone/parse');

    newCustomer.contact = telefoneParse(newCustomer.contact)
    if (newCustomer.contact == null) {
      return res.status(400).json("Enter a mobile number!")
    }

    newCustomer.cnpj = nodeCnpj.unMask(newCustomer.cnpj)
    if (!nodeCnpj.validate(newCustomer.cnpj)) {
      return res.status(400).json("Invalid CNPJ")
    }

    const oldCustomers = await database.Customers.findOne({
      where: {
        cnpj: String(newCustomer.cnpj)
      }
    })
    
    if (oldCustomers != null ) {
      return res.status(400).json("CNPJ duplicated")
    }

    try {
      const newCustomerCreated = await database.Customers.create(newCustomer)
      return res.status(200).json(newCustomerCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAllCustomers(req, res) {
    try {
      const allCustomers = await database.Customers.findAll()
      return res.status(200).json(allCustomers)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getCustomer(req, res) {
    const { cnpj } = req.params
    try {
      const customer = await database.Customers.findOne({
        where: {
          cnpj: String(cnpj)
        }
      })
      const listAddress = await database.Address.findAll({
        where: {
          user_id: customer.id
        }
      })

      customer['dataValues']['addresses'] = listAddress
      console.log(customer)

      return res.status(200).json(customer)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateCustomer(req, res) {
    const { id } = req.params
    const newInfo = req.body
    const updateCustomer = {
      corporateName: newInfo.corporateName,
      contact: newInfo.contact,
      contactName: newInfo.contactName,
    }

    try {
      await database.Customers.update(updateCustomer, { where: { id: Number(id) } })
      const updatedCustomer = await database.Customers.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedCustomer)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteCustomer(req, res) {
    const { id } = req.params
    try {
      await database.Customers.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `Customer ${id} removed` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = CustomersController