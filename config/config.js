const config = {
  "development": {
    "username": "productsadmin",
    "password": "SecretProducts",
    "database": "myowndbuser",
    "host": "productsdb.czgimqsovwuc.ap-south-1.rds.amazonaws.com",
    "dialect": "postgres",
    "operatorsAliases": false
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
    "password": process.env.pssword,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": "postgres",
    "operatorsAliases": false
  }
};
module.exports = config;
