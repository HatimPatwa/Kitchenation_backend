const mysql = require('mysql2');
const util = require('util');

const dotenv = require('dotenv');
dotenv.config();

var con = mysql.createPool({
    // host: process.env.MYSQL_HOST,
    // port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER ,
    password: process.env.MYSQL_PASSWORD ,
    database: process.env.MYSQL_DB     
    
}).promise();


module.exports = con;