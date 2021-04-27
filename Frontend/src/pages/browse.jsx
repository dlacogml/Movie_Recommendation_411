/*index.jsx*/
import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';

//Functional Component 
// const BrowsePage = () => {
  function BrowsePage() {

    const [keyword, setKeyword] = useState('');
    const [returnMovieListTitle, setReturnMovieListTitle] = useState([]);
    const [returnMovieList, setReturnMovieList] = useState([]);
    const USER_ID = sessionStorage.getItem('userID');
    const flag = false;
    const getMoviesByTitle = () => {
      Axios.get('http://localhost:3002/api/searchMoviesByTitle', {
        params: {
          flag:flag,
          user_id : USER_ID,
          keyword:keyword
        }
      }).then((response) => {
        setReturnMovieListTitle(response.data)
      })
    };

    const getMoviesByGenre = () => {
      Axios.get('http://localhost:3002/api/searchMoviesByGenre', {
        params: {
          flag:flag,
          user_id : USER_ID,
          keyword:keyword
        }
      }).then((response) => {
        setReturnMovieList(response.data)
      })
    };
    const getChckeboxValue = (event)=> {
        const flag = event.target.value;
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
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Browse">Browse</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Recommended">Recommended</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/Watched">Watched</Link></a></li>
              <li><a href="#" className="nav-link px-2 link-dark"><Link to="/AccountInfo">Account Info</Link></a></li>
            </ul>
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2"><Link to="/Login">Login</Link></button>
              <button type="button" className="btn btn-primary"><Link to="/SignUp">Sign-Up</Link></button>
            </div>
          </header>
          
          <p>Search Movies</p>
          <div className="checkbox mb-3">
              <label>
              <input onClick={getChckeboxValue.bind(this)} type="checkbox" value="Text" /> Only show movies that are on streaming services that you are subscribed to
              </label>
            </div>
          <br />
          <label>by Title     </label>
          <input type= "text" name = "keyword" onChange={(e) => {
            setKeyword(e.target.value)
            }}/>
          <button onClick = {getMoviesByTitle}>Search</button>
          <div>
            {returnMovieListTitle.map((val) => {
              return(
                <div className = "card">
                <p> Movie Title: {val.title} </p>
                <p> Movie Rating: {val.rating} </p>
                </div>
              );
            })}
          </div>

          <br />
          <label>by Genre </label>
        
          <input type= "text" name = "keyword" onChange={(e) => {
            setKeyword(e.target.value)
            }}/>
          <button onClick = {getMoviesByGenre}>Search</button>
          <div>
            {returnMovieList.map((val) => {
              return(
                <div className = "card">
                <p> Movie Title: {val.title} </p>
                <p> Movie Rating: {val.rating} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>


  );
};

export default BrowsePage;