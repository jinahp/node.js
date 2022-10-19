// get the client
const mysql = require('mysql2');// npm install mysql2

require('dotenv').config();// yarn add dotenv

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password:process.env.PASSWORD,
  database: process.env.DATABASE,
});

// simple query
connection.query(
  'SELECT * FROM topic',
  function(err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);


/*node mysql/mysql2.js 명령어로 실행*/