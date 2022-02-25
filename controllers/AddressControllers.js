const { response } = require('express');
const database = require('../models');
const validate = require('validator');

class AddressController {

  static async createAddress(req, res) {

    const { userId } = req.params
    const newAddress = req.body

    if (newAddress.street == null || newAddress.number == null || newAddress.district == null || newAddress.city == null || newAddress.state == null || newAddress.zipeCode == null) {
      return res.status(400).json("Invalid information")
    }

    try {
      const customer = await database.Customers.findOne({
        where: {
          id: Number(userId)
        }
      })
      if (customer) {
        newAddress.user_id = userId

        const createAddress = await database.Address.create(newAddress)
        return res.status(200).json(createAddress)
      }
      return res.status(400).json("Customer not found")
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }



  static async getAllAddresses(req, res) {
    try {
      const allAddresses = await database.Address.findAll()
      return res.status(200).json(allAddresses)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAddress(req, res) {
    const { id } = req.params
    try {
      const aAddress = await database.Address.findOne({
        where: {
          id: String(id)
        }
      })
      return res.status(200).json(aAddress)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateAddress(req, res) {
    const { id } = req.params
    const newInfo = req.body
    const newUpdateAdress = {
      street: newInfo.street,
      number: newInfo.number,
      addressComplement: newInfo.addressComplement,
      district: newInfo.district,
      city: newInfo.city,
      state: newInfo.state,
      zipeCode: newInfo.zipeCode,
    }
    try {
      await database.Address.update(newUpdateAdress, { where: { id: Number(id) } })
      const updatedAddress = await database.Address.findOne({ where: { id: Number(id) } })
      return res.status(200).json(updatedAddress)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteAddress(req, res) {
    const { id } = req.params
    try {
      await database.Address.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ mensagem: `Address ${id} removed` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AddressController