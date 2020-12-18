require('dotenv').config();

const { Pool } = require('pg');

//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const pool = new Pool({
  //   host: process.env.host,
  //   database: process.env.database,
  //   user: process.env.user,
  //   port: process.env.port,
  //   password: process.env.password,
  //   uri: process.env.uri,
  ssl: { rejectedUnauthorized: false },
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
