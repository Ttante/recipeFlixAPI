'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return  queryInterface.bulkInsert('Users', [
      {
        username: 'Alice Cooper',
        email: 'alice@cooperTime.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Lyndsay Slowhand',
        email: 'lyndsay@slowhand.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Barry Badgernath',
        email: 'barry@aol.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Shirly Templed',
        email: 'test@shirly.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
