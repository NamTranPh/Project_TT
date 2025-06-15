'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      note: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      ship_address: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM('Đang xử lý', 'Đang giao hàng', 'Giao hàng thành công', 'Giao hàng thất bại'),
        allowNull: false,
        defaultValue: 'Đang xử lý'
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};