'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Watchlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        allowNull:false, 
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'Users',
          key: 'id'
        }
      }, 
      movies_list: {
        type: DataTypes.ARRAY(DataTypes.STRING)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Watchlists');
  }
};
