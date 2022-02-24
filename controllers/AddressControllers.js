const database = require('../models');

class AddressController {

    static async createAddress(req, res) {
      console.log("create add")

      const { userId } = req.params
      console.log("params "+userId)
      
      const newAddress = req.body
      console.log("body "+newAddress)
      
      try {
        const customer = await database.Customers.findOne( { 
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



  static async getAllAddress(req, res){
    try {
      const allAddress = await database.Address.findAll()
      return res.status(200).json(allAddress)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAddress(req, res) {
    const { id } = req.params
    try {
      const aAddress = await database.Address.findOne( { 
        where: { 
          id: String(id) 
        }
      })
      return res.status(200).json(aAddress)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

//   static async createUEnderecos(req, res) {
//     const newEnderecos = req.body
//       try {
//         const newEnderecosCreated = await database.Enderecos.create(newEnderecos)
//         return res.status(200).json(newEnderecosCreated)
//       } catch (error) {
//         return res.status(500).json(error.message)
//       }
//   }

  static async updateAddress(req, res) {
    const { id } = req.params
      const newInfo = req.body
      try {
        await database.Address.update(newInfo, { where: { id: Number(id) }})
        const updatedAddress = await database.Address.findOne( { where: { id: Number(id) }})
        return res.status(200).json(updatedAddress)
      } catch (error) {
        return res.status(500).json(error.message)
      }
  }

  static async deleteAddress(req, res) {
    const { id } = req.params
    try {
      await database.Address.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
  
module.exports = AddressController