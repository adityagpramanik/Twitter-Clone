const Pool = require("pg").Pool;
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    user: "postgres",
    password: process.env.DB_KEY,
    // host: 5432,
    host: 'localhost',
    database: "twitter_clone",
});

module.exports = pool;