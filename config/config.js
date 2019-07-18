const config = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.username,
    "password": process.env.password,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "postgres"
  }
};
module.exports = config;
