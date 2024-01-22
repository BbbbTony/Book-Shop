const mariadb = require('mysql2');

const connection = mariadb.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'Bookshop',
    dateStrings: true,
});

module.exports = connection;
