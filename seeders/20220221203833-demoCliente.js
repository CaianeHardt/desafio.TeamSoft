'use strict';
const { getMaxListeners } = require("process");


module.exports = {
  up: async  (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clientes', [

    { 
      cnpj: '27339766000151',
      razaoSocial: 'TEAMSOFT TECNOLOGIA E SISTEMAS LTDA',
      nomeDoContato: 'Carvalho',
      telefone: '(21) 8903-3185',
      type: 'customer',
      occupation: 'Dev',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],
    {});
  }, 

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};


