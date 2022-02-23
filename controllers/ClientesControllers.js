const database = require('../models');

class ClientesController {

  static async getAllClientes(req, res){
    try {
      const allClientes = await database.Clientes.findAll()
      return res.status(200).json(allClientes)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getAClientes(req, res) {
    const { cnpj } = req.params
    try {
      const aCliente = await database.Clientes.findOne( { 
        where: { 
          cnpj: String(cnpj) 
        }
      })
      return res.status(200).json(aClientes)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createUClientes(req, res) {
    const newClientes = req.body
    try {
      newClientes.cnpj = (await ClientesController.addcnpj(newClientes.cnpj)).toString()
      
      const newClientesCreated = await database.Clientes.create(newClientes)
      newClientesCreated.password = null;
      return res.status(200).json(newClientesCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateClientes(req, res) {
    const { id } = req.params
    const newInfo = req.body
    try {
      await database.Clientes.update(newInfo, { where: { id: Number(id) }})
      const updatedClientes = await database.Clientes.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedClientes)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClientes(req, res) {
    const { id } = req.params
    try {
      await database.Clientes.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
  
module.exports = ClientesController