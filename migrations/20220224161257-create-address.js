'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: {
            tableName: 'Custumers',
            schema: 'schema',},
            key: 'id'
          },
      },
      street: {
        type: Sequelize.STRING(50)
      },
      number: {
        type: Sequelize.INTEGER(10)
      },
      addressComplement: {
        type: Sequelize.STRING(50)
      },
      district: {
        type: Sequelize.STRING(50)
      },
      city: {
        type: Sequelize.STRING(50)
      },
      state: {
        type: Sequelize.STRING(2)
      },
      zipeCode: {
        type: Sequelize.STRING(20)
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
    await queryInterface.dropTable('Address');
  }
};