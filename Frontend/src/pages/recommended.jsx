/*index.jsx*/
import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';


//Functional Component 
function RecommendedPage () {

  /* Get Movie Recommendations by calling stored procedure*/
  const [returnMovieRecList, setReturnMovieRecList] = useState([]);
  const USER_ID = sessionStorage.getItem('userID');

  const getMoviesRecs = () => {
    Axios.get('http://localhost:3002/api/getMovieRecs', {
      params: {
          UserId:USER_ID
        }
    }).then((response) => {
      setReturnMovieRecList(response.data[0])
    })
  };

  return (
    <div onload={getMoviesRecs()}>
    {/* <body onload={getMoviesRecs()}></body> */}

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Hugo 0.82.0" />
        <title>Headers Â· Bootstrap v5.0</title>
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
            {/* <body onload={getMostPop()}> */}
          </header>
          <p>Your Recommended Movies</p>
    
              <p>Movie recommendations are made using the following three criteria:</p>
              <div className="container">1. Movies with actors who have acted in movies that you have previously watched.</div> 
              <div className="container">2. Movies watched by other users who have similar watch histories as yourself.</div>
              <div className="container">3. Movies recommended based on your most watched genre.</div>
              <div className="container">
          <br/>
          <button className="btn btn-outline-primary me-2" onClick = {getMoviesRecs}> Show Me! </button>
          <div className="container"></div>
          {returnMovieRecList.map((val) => {
            return(
              <grid className = "card">
                  <img className="photo"
                    src='https://m.media-amazon.com/images/S/sash/i-t32yvKixg10fG.png'
                    alt="new"
                    />
              <p> Movie Name: {val.title} </p>
              <p> Movie Rating: {val.rating} </p>
              <p> Genre: {val.genre} </p>
              </grid>
            );
          })}
          </div>
        </div>

      </div>
  );
};

export default RecommendedPage;