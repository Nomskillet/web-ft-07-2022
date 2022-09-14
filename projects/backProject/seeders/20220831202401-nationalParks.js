'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   parkName: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('nationalParks', [{
      parkName: 'Fort Union National Monument',
      state: 'FL',
      createdAt: new Date(),
      updatedAt: new Date(),
      
    },
      {
        parkName: 'Glen Canyon National Recreation Area',
        state: 'FL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkName: 'Hovenweep National Monument',
        state: 'FL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkName: 'Glen Canyon National Recreation Area',
        state: 'FL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        parkName: 'Sand Creek Massacre National',
        state: 'FL',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
