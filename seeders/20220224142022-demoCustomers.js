'use strict';
const { getMaxListeners } = require("process");


module.exports = {
  up: async  (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clientes', [

    { 
      cnpj: '27339766000151',
      corporateName: 'TEAMSOFT TECNOLOGIA E SISTEMAS LTDA',
      contactName: 'Carvalho',
      contact: '(21) 98903-3185',
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


