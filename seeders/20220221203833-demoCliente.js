'use strict';
const { getMaxListeners } = require("..");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [

      cnpj, '27.339.766/0001-51',
      razaoSocial, 'TEAMSOFT TECNOLOGIA E SISTEMAS LTDA',
      nomeDoContato, 'Carvalho',
      telefone, '(21) 8903-3185',
      type, 'customer',
      occupation, "Dev",
      createdAt, new Date(),
      updatedAt, new Date()
    ]
      
  }

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
