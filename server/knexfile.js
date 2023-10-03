import dotenv from 'dotenv';
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const knexConfig = {
    development : {
      client: 'postgresql',
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT, 10) || 5432 // Default to 5432 if not provided
      },
      pool: {
        min: parseInt(process.env.POOL_MIN, 10) || 2,
        max: parseInt(process.env.POOL_MAX, 10) || 10 // Default to 10 if not provided
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    staging: {
      client: 'postgresql',
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT, 10) || 5432 // Default to 5432 if not provided
      },
      pool: {
        min: parseInt(process.env.POOL_MIN, 10) || 2,
        max: parseInt(process.env.POOL_MAX, 10) || 10 // Default to 10 if not provided
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT, 10) || 5432 // Default to 5432 if not provided
      },
      pool: {
        min: parseInt(process.env.POOL_MIN, 10) || 2,
        max: parseInt(process.env.POOL_MAX, 10) || 10 // Default to 10 if not provided
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
}

export default knexConfig;