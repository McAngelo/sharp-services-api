require('dotenv').config({ path: 'env' });
module.exports = {
  "development":{
    "username": 'root',
    "password": 'mich_codAfric',
    "database": 'shape_services_api',
    "host": '127.0.0.1',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER_NAME || '',
    "password": process.env.DB_USER_PWD || '',
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER_NAME || '',
    "password": process.env.DB_USER_PWD || '',
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}