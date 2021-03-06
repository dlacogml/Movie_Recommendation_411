/*index.jsx*/
import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';

//Functional Component 
function WatchedPage () {
  const USER_ID = sessionStorage.getItem('userID');

  /* Add new watched relation */
  const [movieIDWatchedMovie, setMovieIDWatchedMovie] = useState('');
  const [dateWatchedMovie, setDateWatchedMovie] = useState('');
  const [timeWatchedMovie, setTimeWatchedMovie] = useState('');
  const [ratingWatchedMovie, setRatingWatchedMovie] = useState('');

  /* Get Movies watched by User*/
  const [returnMovieWatchList, setReturnMovieWatchList] = useState([]);

  /* Search for Movie IDS by title list*/
  const [keyword, setKeyword] = useState('');
  const [returnMovieIDList, setReturnMovieIDList] = useState([]);

  /* Update a user's movie rating */
  const [newMovieRating, setNewMovieRating] = useState('');

  const getMoviesWatchedByUser = () => {
    Axios.get('https://cs411-teamteam.uc.r.appspot.com/api/searchMoviesWatched', {
      params: {
        UserId: USER_ID
      }
    }).then((response) => {
      setReturnMovieWatchList(response.data)
    })
  };

  const updateMovieWatch = () => {
    Axios.put(`https://cs411-teamteam.uc.r.appspot.com/api/updateReview`, {
      movieIDWatchedMovie: movieIDWatchedMovie,
      newMovieRating: newMovieRating,
      UserId: USER_ID
    });
    setNewMovieRating("")
  };

  const submitNewWatchMovie = () => {
    Axios.post(`https://cs411-teamteam.uc.r.appspot.com/api/insertNewWatchMovie`, {
      movieIDWatchedMovie: movieIDWatchedMovie,
      dateWatchedMovie: dateWatchedMovie,
      timeWatchedMovie: timeWatchedMovie,
      ratingWatchedMovie: ratingWatchedMovie,
      UserId: USER_ID
    }).then(() => {
      alert('success insert')
    });

  };

  const deleteWatchMovie = () => {
    Axios.delete(`https://cs411-teamteam.uc.r.appspot.com/api/delete/`,
      {data: {
      movieIDWatchedMovie:movieIDWatchedMovie,
      UserId: USER_ID
    }})
  };

  const getMovieIDbyTitle = () => {
    Axios.get('https://cs411-teamteam.uc.r.appspot.com/api/getMovieIDbyTitle', {
      params: {
        keyword:keyword
      }
    }).then((response) => {
      setReturnMovieIDList(response.data)
    })
  };

  return (
    // <div>
    //   <h3>Welcome to the React Router Tutorial</h3>
    //   <small>Main Page</small>
    //   <button><Link to="/user">Show List of Users</Link></button>
    // </div>
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Hugo 0.82.0" />
        <title>Headers ???? Bootstrap v5.0</title>
        <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/" />
        {/* Bootstrap core CSS */}
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n    " }} />
        {/* Custom styles for this template */}
        <link href="headers.css" rel="stylesheet" />
        <div className="b-example-divider" />
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
            </a>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><a href="#" className="nav-link px-2 link-secondary"><Link to="/">Home</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Browse">Search</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Recommended">Recommended</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Watched">Watched</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/AccountInfo">Account Info</Link></a></li>
            </ul>
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2"><Link to="/Login">Login</Link></button>
              <button type="button" className="btn btn-primary"><Link to="/SignUp">Sign-Up</Link></button>
            </div>
          </header>

          <div className="container">
          <p>Your Movie Reviews</p>
            <div>
            <p>Find Movie ID</p>
              <label>by Title</label>
              <input className = "text" type= "text" name = "keyword" onChange={(e) => {
              setKeyword(e.target.value)
              }}/>
              <div className="container"></div>
              <button className="btn btn-outline-primary me-2" onClick = {getMovieIDbyTitle}>Search</button>
              <div>
                 {returnMovieIDList.map((val) => {
                    return(
                      <div className = "card">
                      <p> Movie Title: {val.title} </p>
                      <p> Movie ID: {val.ID} </p>
                      </div>
                    );
                  })}
          </div>
            </div>
            <br/>
            <div>
            <p>Watched a new movie?</p>
            <label>Movie ID </label>
            <input className = "text" type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
               setMovieIDWatchedMovie(e.target.value)
               }}/><br/>
            <label>Date Watched (YYYY-M-D) </label>
              <input className = "text" type= "text" name = "dateWatchedMovie" onChange={(e) => {
              setDateWatchedMovie(e.target.value)
              }}/><br/>
            <label>Time Watched (0-24H:M) </label>
              <input className = "text" type= "text" name = "timeWatchedMovie" onChange={(e) => {
              setTimeWatchedMovie(e.target.value)
              }}/><br/>
            <label>Rating (0-10) </label>
              <input className = "text" type= "text" name = "ratingWatchedMovie" onChange={(e) => {
              setRatingWatchedMovie(e.target.value)
              }}/><br/>
              <button className="btn btn-outline-primary me-2" onClick = {submitNewWatchMovie}>Submit Review</button>
            </div>
            <br/>
            <div>
            <p>Update a Movie Rating</p>
            <label>Movie ID </label>
            <input className = "text" type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
               setMovieIDWatchedMovie(e.target.value)
               }}/><br/>
            <label>UPDATED Rating (0-10): </label>
              <input className = "text" type= "text" name = "newMovieRating" onChange={(e) => {
              setNewMovieRating(e.target.value)
              }}/><br/>
              <button className="btn btn-outline-primary me-2" onClick = {updateMovieWatch}> Update </button>
            </div>
              <br/>
            <div>
            <p>Delete Review</p>
            <label>Movie ID </label>
            <input className = "text" type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
               setMovieIDWatchedMovie(e.target.value)
               }}/><br/>
              <button className="btn btn-outline-primary me-2" onClick = {deleteWatchMovie}>Delete</button>
            </div>

              
          
          </div>

          <br/>

          <div className="container">
          <p>Your Watch History</p>
          <button className="btn btn-outline-primary me-2" onClick = {getMoviesWatchedByUser}> Show Me! </button>
          {returnMovieWatchList.map((val) => {
            return(
                <grid className = "card">
                <img className="photo"
                  src='https://m.media-amazon.com/images/S/sash/i-t32yvKixg10fG.png'
                  alt="new"
                  />
            <p> Movie Name: {val.title} </p>
            <p> Movie Rating: {val.rating} </p>
            </grid>
            );
          })}
          </div>
              
        </div>
      </div>
  );
};

export default WatchedPage;