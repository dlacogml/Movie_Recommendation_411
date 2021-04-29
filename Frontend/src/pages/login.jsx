/*login.jsx*/
// import React from "react";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import { Link, BrowserRouter, Route, useHistory} from "react-router-dom";
import AccountInfoPage from "./user"; ///< index.jsx will be automatically imported 

const LoginPage = () => {

  // sessionStorage.setItem('userID', userID)
  const [userID, setUserID] = useState('');
  sessionStorage.setItem('userID', userID)
    // const USER_ID = sessionStorage.getItem('userID');
  const[Password, setPassword]=useState('');
//   Password = '';
  const[returnUserAccountInfo, setReturnUserAccountInfo]=useState([]);
  var element = null;
  const history = useHistory();

  const getAccountInfo = () => {
    Axios.get(`https://cs411-teamteam.uc.r.appspot.com/api/fetchAccountInfo`,
    {
      params: {
        UserId: userID
      }
    }).then((response) => {
      setReturnUserAccountInfo(response.data)
    })
  };
  const clicked = (event) =>{
      console.log(userID);
    getAccountInfo(userID);

    if(returnUserAccountInfo.length == 0 || Password != returnUserAccountInfo[0].Password){
        // console.log('here')
        alert('Incorrect username or password, please try again')
        return null;
    }
    if(Password == returnUserAccountInfo[0].Password){
        console.log('here');
        sessionStorage.setItem('userID', userID);
        history.push(event.target.value);
    }
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
            <button className="w-100 btn btn-lg btn-primary" type = "button" onClick = {clicked}>Sign In</button>     
          </form>
        </main>
      </div>
  );
};

export default LoginPage;