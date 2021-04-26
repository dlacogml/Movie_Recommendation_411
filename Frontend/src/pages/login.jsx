/*login.jsx*/
// import React from "react";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import { Link, BrowserRouter, Route} from "react-router-dom";
import AccountInfoPage from "./user"; ///< index.jsx will be automatically imported 

const LoginPage = () => {

  // sessionStorage.setItem('userID', userID)
  const [userID, setUserID] = useState('');
  sessionStorage.setItem('userID', userID)
    // const USER_ID = sessionStorage.getItem('userID');
  const[Password, setPassword]=useState('');
  const[returnUserAccountInfo, setReturnUserAccountInfo]=useState([]);

  const getAccountInfo = () => {
    Axios.get(`http://localhost:3002/api/fetchAccountInfo`,
    {
      params: {
        UserId: userID
      }
    }).then((response) => {
      setReturnUserAccountInfo(response.data)
    })
  };
 

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
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
        }}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type = "submit"><Link to="/AccountInfo">Sign In</Link></button>     
            {/* {
              returnUserAccountInfo.map((val) => {
                if(Password == val.Password) {
                  sessionStorage.setItem('userID', userID)
                  return (<BrowserRouter><Route path="/AccountInfo" component={AccountInfoPage}></Route> </BrowserRouter>);
                } else {
                  return (<text> Login not successful</text>);
                }
              })
            } */}
          </form>
        </main>
      </div>
  );
};

export default LoginPage;