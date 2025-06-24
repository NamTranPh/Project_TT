'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
    name: 'Admin',
    email: 'admin123@gmail.com',
    password: '$2b$10$YWpBsmbWy/om1iyPncJRIuR1jiYcTUptx/Ncx6s/bdSbK/2yE/mQS',
    address: '58890 Deron Brooks, Suite 824, 35325, Auroreshire, Nebraska, United States',
    phoneNumber: '206-588-9684',
    avatar: null,
    role: 'admin',
   }])
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
