{
  "development": {
    "username": process.env.DB_USER_NAME || '',
    "password": process.env.DB_USER_PWD || '',
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
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