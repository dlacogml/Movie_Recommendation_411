/*login.jsx*/
// import React from "react";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [userID, setUserID] = useState('');
  
  const saveUserID = () => {
    Axios.post('http://localhost:3002/api/saveUserID', {
      userID : userID
    }).then(() => {
      alert('success insert')
    });
  };
 
  sessionStorage.setItem('userID', userID);
  // const USER_ID = sessionStorage.getItem('userID');
  
  return (
    <div>
        {/* <link href="signin.css" rel="stylesheet" /> */}
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input type="username" className="form-control" id="floatingInput" placeholder="user id" onChange={(e) => {
        setUserID(e.target.value)
        }}/>
              <label htmlFor="floatingInput">ID</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick = {saveUserID}><Link to="/AccountInfo">Sign in</Link></button>
          </form>
        </main>
      </div>
  );
};

export default LoginPage;