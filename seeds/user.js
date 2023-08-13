const { User } = require('../models');

const userData =
[
  {
    "username": "Zhouse",
    "email": "Zhouse@gmail.com",
    "password": "Zhouse@1234"
  },
  {
    "username": "agridee",
    "email": "agridee@yahoo.com",
    "password": "agridee8938!!"
  },
  {
    "username": "ktowns",
    "email": "ktowns@gmail.com",
    "password": "ktowns89383!!"
  },
  {
    "username": "esanders",
    "email": "aesanders@gmail.com",
    "password": "esanders9093!!"
  },
  {
    "username": "jholiday",
    "email": "jholiday@gmail.com",
    "password": "jholiday90383"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;