const express = require('express')
const mysql = require('mysql2');
const app = express()

require('dotenv').config();// yarn add dotenv

app.get('/', function (req, res) {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  
  let body = '<h1>single row</h1>';
  connection.query(
    'SELECT * FROM topic WHERE id = 5',
    function(err, results, fields) {
      let row = results[0];
      body +=row.title;
      res.send(body);
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );


//     $result = mysqli_query($conn, $sql);
//     $row = mysqli_fetch_array($result);
//     echo '<h2>'.$row['title'].'</h2>';
//     echo $row['description'];

//     echo "<h1>multi row</h1>";
//     $sql = "SELECT * FROM topic";
//     $result = mysqli_query($conn, $sql);

//     while( $row = mysqli_fetch_array($result) ) {
//         echo '<h2>'.$row['title'].'</h2>';
//         echo $row['description'];
//     }

})

app.listen(3000, function() {
    console.log('Listening: http://localhost:3000');
});
