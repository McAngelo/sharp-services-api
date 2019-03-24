require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    environment: process.env.NODE_ENV
    //dialect: 'mysql',
    // operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PORT,
    environment: process.env.NODE_ENV
    //dialect: 'mysql',
    // operatorsAliases: false,
  },
};
