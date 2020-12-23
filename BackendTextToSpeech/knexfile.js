/*

BANCO MYSQL, dados estão no  .env

*/

require('dotenv/config');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host: process.env.HOST_HOUPANDO,
        user: process.env.USER_HOUPANDO,
        password: process.env.PASSWORD_HOUPANDO,
        database: process.env.DATABASE_HOUPANDO,
    },
    migrations: {
      directory: './migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
