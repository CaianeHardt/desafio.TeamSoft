'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING(14),
        uniqueKey: true,
        allowNull: false,
      },
      corporateName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      contactName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      contact: {
        type: Sequelize.STRING(13),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};