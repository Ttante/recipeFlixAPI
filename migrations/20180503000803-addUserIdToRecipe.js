'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Recipe',
      'userId',
      Sequelize.INTEGER
      )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Recipe',
      'userId'
      )
  }
};
