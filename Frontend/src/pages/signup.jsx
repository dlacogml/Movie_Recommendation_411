/*login.jsx*/
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

/* We simply can use an array and loop and print each user */
const SignUpPage = () => {
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  
  
  const submitNewUserID = () => {
    Axios.post('http://localhost:3002/api/insertNewUser', {
      newUserId: newUserId,
      newPassword: newPassword,
      newBirthday: newBirthday
    }).then(() => {
      alert('success insert')
    });
  };

  return (
    <div>
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Sign Up for an Account</h1>
            <div className="form-floating">
              <input type="username" className="form-control" id="floatingInput" placeholder="user id" onChange={(e) => {
         setNewUserId(e.target.value)
         }}/>
              <label htmlFor="floatingInput">ID</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {
        setNewPassword(e.target.value)
        }}/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="birthday" className="form-control" id="floatingBirthday" placeholder="mm/dd/yyyy" onChange={(e) => {
        setNewBirthday(e.target.value)
        }}/>
              <label htmlFor="floatingBirthday">Birthday</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick = {submitNewUserID}><Link to="/login">Sign Up</Link></button>
          </form>
        </main>
      </div>
  );
};

export default SignUpPage;