const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
var userID; 

// var db = mysql.createConnection({
//     host: '34.121.53.55',
//     user: 'root',
//     password: 'teamteam',
//     database: 'TeamTeam'
// })

// db.connect(function(err) {
//     if (err) throw err;
//     // console.log("Connected!");
//   });

let config = {
    user: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
    password: process.env.SQL_PASSWORD,
}

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

let connection = mysql.createConnection(config);
module.exports = connection;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/fetchAccountInfo", (request, result) => {
    // console.log(request.body);
    const userID = request.query.UserId;
    console.log("i hate this class");
    console.log(userID);
    const sql = "SELECT * FROM User WHERE User_id = ?;";

    db.query(sql, [userID], (err, results, fields) => {
        console.log(results);
        if (err) throw err
        result.send(results);
        // console.log("reached inside?");      
    });
})

app.get("/api/fetchAccountSubscribed", (request, result) => {
  // console.log(request.body);
  const userID = request.query.UserId;

  console.log(userID);
  const sql = "SELECT DISTINCT Name FROM subscribed WHERE User_id = ?;";

  db.query(sql, [userID], (err, results, fields) => {
      console.log(results);
      if (err) throw err
      result.send(results);
      // console.log("reached inside?");      
  });
})

app.put("/api/updatePassword", (require, response) => {
    const NewPassword = require.body.NewPassword;
    const UserID = require.body.UserId;
    const oldPassword = require.body.OldPassword;
    console.log("reached update password");

    const sqlUpdate = "UPDATE User SET Password = ? WHERE User_id = ? and Password = ?";
    db.query(sqlUpdate, [NewPassword, UserID, oldPassword], (err, result) => {
        if (err) throw err
        console.log("reached inside?");      
    });
})

app.put("/api/insertStreamingService", (require, response) => {
  const Name = require.body.Name;
  const UserID = require.body.UserId;

  const sqlUpdate = " INSERT INTO subscribed (Name, User_id) VALUES (? ,?);";
  db.query(sqlUpdate, [Name, UserID], (err, result) => {
      if (err) throw err
      console.log("reached inside?");      
  });
})

app.delete("/api/deleteStreamingService/", (require, response) => {
  const UserId = require.body.UserId;
  const Name = require.body.Name;
  console.log(UserId);
  console.log(Name);
  const sqlDelete = "DELETE FROM subscribed WHERE User_id = ? AND Name LIKE CONCAT('%' , ? , '%')";
  db.query(sqlDelete, [UserId, Name], (err, result) => {
      if (err) 
      console.log(error);
      console.log("here2");
  })
});


app.delete("/api/deleteUser/", (require, response) => {
    const deleteUserId = require.body.UserId;
    const deletePassword = require.body.Password;
    console.log(deleteUserId);
    console.log(deletePassword);
    const sqlDelete = "DELETE FROM User WHERE User_id = ? and Password = ?;";
    db.query(sqlDelete, [deleteUserId, deletePassword], (err, result) => {
        if (err) 
        console.log(error);
        console.log("here2");
    })
});

app.post('/api/insertNewUser', (require, response) => {
    const newUserId = require.body.newUserId;
    const newPassword = require.body.newPassword;
    const newBirthday = require.body.newBirthday;
    
    var sql = "INSERT INTO User (User_id, date_of_birth, Password) VALUES (?, ?, ?);";
    
    db.query(sql, [newUserId, newBirthday, newPassword], function (err, result) {
        if (err) throw err;
        console.log(result);
        response.send("pls work... :(");
        console.log("test 1 completed");
      });
})

app.get("/api/getMostPop", (request, result) => {
    // console.log("Searching for Movies");
    const sqlUpdate = "SELECT title, rating, genre FROM Movies ORDER BY rating desc LIMIT 20;";
    db.query(sqlUpdate, (err, results, fields) => {
        // console.log(fields);
        if (err) throw err
        result.send(results);  
    });
})



app.get("/api/searchMoviesByTitle", (request, result) => {
    console.log("Searching for Movies");
    const keyword = request.query.keyword;
    const flag = request.query.flag;
    const user_id = request.query.user_id;
    console.log(flag);
    console.log(user_id);
    if(flag== 'true'){
        const sqlUpdate = "SELECT DISTINCT Recs.title, Recs.rating, Recs.genre FROM Have_movie JOIN (SELECT ID, title, rating, genre FROM Movies WHERE title LIKE CONCAT('%' , ? , '%') ) as Recs USING (ID) WHERE Service_name IN (SELECT Name AS Service_name FROM subscribed WHERE User_id = ?) ORDER BY Recs.rating desc LIMIT 20;";
        db.query(sqlUpdate, [keyword,user_id], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
    }else{
    const sqlUpdate = "SELECT title, rating, genre FROM Movies WHERE title LIKE CONCAT('%' , ? , '%') ORDER BY rating desc LIMIT 20;";
    db.query(sqlUpdate, [keyword], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
}
})


app.get("/api/searchMoviesByGenre", (request, result) => {
    console.log("Searching for Movies");
    const keyword = request.query.keyword;
    const flag = request.query.flag;
    const user_id = request.query.user_id;
    console.log(flag);
    console.log(user_id);
    if(flag == 'true'){
        const sqlUpdate = "SELECT DISTINCT Recs.title, Recs.rating, Recs.genre FROM Have_movie JOIN (SELECT ID, title, rating, genre FROM Movies WHERE genre LIKE CONCAT('%' , ? , '%') ) as Recs USING (ID) WHERE Service_name IN (SELECT Name AS Service_name FROM subscribed WHERE User_id = ?) ORDER BY Recs.rating desc LIMIT 20;";
        db.query(sqlUpdate, [keyword,user_id], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
    }else{
    const sqlUpdate = "SELECT title, rating, genre FROM Movies WHERE genre LIKE CONCAT('%' , ? , '%') ORDER BY rating desc LIMIT 20;";
    db.query(sqlUpdate, [keyword], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
}
})

app.get("/api/getMovieIDbyTitle", (request, result) => {
    console.log("Searching for Movies");
    const keyword = request.query.keyword;
    
    const sqlUpdate = "SELECT title, ID FROM Movies WHERE title LIKE CONCAT('%' , ? , '%') ORDER BY rating desc LIMIT 20;";
    db.query(sqlUpdate, [keyword], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
})

app.get("/api/getMovieRecs", (request, result) => {
  const userid = request.query.UserId;
  const sqlRead = "call movie_suggested(?);";
  console.log(userid);
  db.query(sqlRead, [userid], (err, results, fields) => {
    if (err) throw err;
    result.send(results);
    console.log(results);
  });
})

app.get("/api/BrowseFilterStreaming", (request, result) => {
    console.log("Searching for Movies");
    const keyword = request.query.movieSearchGenreName;
    
    const sqlUpdate = "SELECT title, rating, genre FROM Movies JOIN Have_movie USING (ID) JOIN Streaming_Service USING (Service_name) JOIN subscribed ON (Name=Service_name) WHERE User_id = ? and title LIKE CONCAT('%' , ? , '%') LIMIT 20;";
    db.query(sqlUpdate, [keyword], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);  
    });
})


app.get("/api/searchMovieByGenre", (request, result) => {
    const movieSearchGenreName = request.query.keyword;
    // console.log(request)
    // console.log(movieSearchGenreName);
    const sqlUpdate = "SELECT title, rating, genre FROM Movies JOIN (SELECT ID FROM belongs_to_Movie WHERE genre_name = ?) as sub1 USING (ID) ORDER BY rating desc LIMIT 10;";

    db.query(sqlUpdate, [movieSearchGenreName], (err, results, fields) => {
        console.log(fields);
        if (err) throw err
        result.send(results);
        // console.log(results);
        console.log("reached inside?");      
    });
})

app.get("/api/searchForUser", (request, result) => {
    const searchForUser = request.query.searchForUser;
    // console.log(request)
    // console.log(movieSearchGenreName);
    const sqlUpdate = "SELECT User_id, date_of_birth FROM User WHERE User_id LIKE CONCAT('%' , ? , '%') LIMIT 10;";

    db.query(sqlUpdate, [searchForUser], (err, results, fields) => {
        // console.log(fields);
        if (err) throw err
        result.send(results);
        // console.log(results);
        console.log("reached inside?");      
    });
})

app.get("/api/topRatedMovieByGenre", (request, result) => {
    // const movieSearchGenreName = request.query.movieSearchGenreName;
    // console.log(request)
    // console.log(movieSearchGenreName);
    const sqlUpdate = "SELECT g.genre_name, title, rating FROM Movies m JOIN belongs_to_Movie g USING (ID) JOIN (SELECT genre_name, max(rating) as rate FROM Movies m JOIN belongs_to_Movie g USING (ID) GROUP BY g.genre_name) as sub ON (g.genre_name = sub.genre_name and sub.rate = m.rating);";
    console.log("here1234");
    db.query(sqlUpdate, (err, results, fields) => {
        if (err) throw err
        result.send(results);
        // console.log(results);
        console.log("reached inside?");      
    });
})

  app.get(`/api/searchMoviesWatched`, (request, result) => {
    const UserId = request.query.UserId;
    const sqlRead = "SELECT m.title as title, w.date as date, w.rating as rating FROM watched_movie w JOIN Movies m USING (ID) WHERE w.User_id = ? ORDER BY date desc LIMIT 20;";
    db.query(sqlRead, [UserId], (err, results, fields) => {
      if (err) throw err;
      result.send(results);
    });
  })

  app.put("/api/updateReview", (require, response) => {
    const movieIDWatchedMovie = require.body.movieIDWatchedMovie;
    const userIDWatchedMovie = require.body.UserId;
    const newMovieRating = require.body.newMovieRating;
    const sqlUpdate = "UPDATE watched_movie SET rating = ? WHERE ID = ? AND User_id = ?;";
    db.query(sqlUpdate, [newMovieRating, movieIDWatchedMovie, userIDWatchedMovie], (err, result) => {
      if (err) throw err;
      response.send("Update successful");
      console.log(err);
    });
  })

  app.delete("/api/delete", (require, response) => {
    const movieIDWatchedMovie = require.body.movieIDWatchedMovie;
    const userIDWatchedMovie = require.body.UserId;
  
    console.log("deleting review");

    const sqlDelete = "DELETE FROM watched_movie WHERE ID = ? AND User_id = ?;";
    db.query(sqlDelete, [movieIDWatchedMovie, userIDWatchedMovie], (err, result) => {
      console.log(result);
      response.send("deleted a row from watched_movie");
    })
  });

app.post('/api/insertSubscribed', (require, response) => {
    console.log("before insert attempt");
    const Name = require.body.Name;
    const userID = require.body.userID;

    var sqlInsert = "INSERT INTO subscribed (Name, User_id) VALUES (?,?);";
  
    db.query(sqlInsert, [Name, userID], function(err, result) {
      if (err) throw err;
      console.log(err);
      response.send("insert a row");
      console.log("reached inside");
    })
  
})

app.post('/api/insertNewWatchMovie', (require, response) => {
    const movieIDWatchedMovie = require.body.movieIDWatchedMovie;
    const userIDWatchedMovie = require.body.UserId;
    const dateWatchedMovie = require.body.dateWatchedMovie;
    const timeWatchedMovie = require.body.timeWatchedMovie;
    const ratingWatchedMovie = require.body.ratingWatchedMovie;
    var sql = "INSERT INTO watched_movie (ID,User_id,date,time,rating) VALUES (?, ?,?,?,?);";
    db.query(sql, [movieIDWatchedMovie, userIDWatchedMovie,dateWatchedMovie,timeWatchedMovie,ratingWatchedMovie], function (err, result) {
        if (err) throw err;
        console.log(result);
        response.send("pls work... :(");
        console.log("test 1 completed");
      });
})

  app.get(`/api/searchMovieTitles`, (request, result) => {
    const movieSearchNameKeyword = request.query.movieSearchNameKeyword;
    const sqlRead = "SELECT title, rating FROM Movies WHERE title LIKE CONCAT('%',?,'%');";
    db.query(sqlRead, [movieSearchNameKeyword], (err, results, fields) => {
      if (err) throw err;
      result.send(results);
    });
  })
  
  app.get(`/api/searchMoviesWatched`, (request, result) => {
    const userIDWatchedMovie = request.query.userIDWatchedMovie;
    const sqlRead = "SELECT m.title, w.rating FROM Movies m JOIN watched_movie w on m.ID = w.ID WHERE w.User_id = ?;";
    db.query(sqlRead, [userIDWatchedMovie], (err, results, fields) => {
      if (err) throw err;
      result.send(results);
    });
  })
  
  app.get("/api/getNumberOfMoviesPerGenre", (request, result) => {
    const sqlRead = "SELECT g.genre_name as name, count(w.time) as num FROM watched_movie w JOIN belongs_to_Movie g ON (w.ID = g.ID) GROUP BY g.genre_name;";
    db.query(sqlRead,[],(err,results, fields) => {
      if (err) throw err;
      result.send(results);
    })
  })

app.listen(3002, () => {
    console.log("running on port 3002");
})

//node index.js