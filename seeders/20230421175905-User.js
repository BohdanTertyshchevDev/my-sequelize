'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', 
    [
      {
        "first_name": "Test11",
        "last_name": "T11",
        "email": "test_11@gmail.com",
        "password": "qwertyfgfdgd",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      },
      {
        "first_name": "Test12",
        "last_name": "T12",
        "email": "test_12@gmail.com",
        "password": "qwertyfgfdgd",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      },{
        "first_name": "Test13",
        "last_name": "T13",
        "email": "test_13@gmail.com",
        "password": "qwertyfgfdgd",
        "birthday": "1980-08-08",
        "gender": "male",
        "created_at": "2023-02-13 18:47:45",
        "updated_at": "2023-02-13 18:47:45"
      }
    ], {}
    )
  }
};
