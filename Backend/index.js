const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

var db = mysql.createConnection({
    host: '34.121.53.55',
    user: 'root',
    password: 'teamteam',
    database: 'TeamTeam'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/getMovies', (request, result) => {
    var sql = "SELECT * FROM Movies LIMIT 5;";
    db.query(sql, (err, results, fields) => {
        if(err) throw err;
        result.send(results);
    })
})


app.get('/api/searchByGenre/', (request, result) => {
    // let param = request.query.genreName;
    const genre_name = request.body.genreName;
    console.log("reaching?");
    var sql = "SELECT * FROM 'Movies' WHERE 'genre' LIKE '%?%' LIMIT 2;";
    db.query(sql, [genre_name], (err, results, fields) => {
        if(err) throw err;
        console.log("reached");
        result.send(results);
    })
})


app.post('/api/insert', (require, response) => {
    const genreName = require.body.genreName;
    
    
    var sql = "INSERT INTO Genre (genre_name) VALUES (?);";
    
    db.query(sql, [genreName], function (err, result) {
        if (err) throw err;
        console.log(result);
        response.send("pls work... :(");
        console.log("test 1 completed");
      });
})

app.listen(3002, () => {
    console.log("running on port 3002");
})

//node index.js