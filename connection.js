const mysql = require('mysql2');
const util = require('util');

var con = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    // port:"root",
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'cdn123',
    database: "kitchenation"
}).promise();


module.exports = con;