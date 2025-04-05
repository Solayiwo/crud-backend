const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Supabase and many managed DBs
  },
});

module.exports = pool;
