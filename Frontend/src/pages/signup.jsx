/*login.jsx*/
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import { Link, useHistory } from "react-router-dom";

/* We simply can use an array and loop and print each user */
const SignUpPage = () => {
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const history = useHistory();
  
  const submitNewUserID = (event) => {
    Axios.post('https://cs411-teamteam.uc.r.appspot.com/api/insertNewUser', {
      newUserId: newUserId,
      newPassword: newPassword,
      newBirthday: newBirthday
    }).then(() => {
      alert('success insert')
    });
    history.push(event.target.value);
  };

  return (
    <div>
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Sign Up for an Account</h1>
            <div className="form-floating">
            <label htmlFor="floatingInput">ID</label>
              <input type="username" className="form-control" id="floatingInput" placeholder="user id" onChange={(e) => {
         setNewUserId(e.target.value)
         }}/>

            </div>
            <div className="form-floating">
            <label htmlFor="floatingPassword">Password</label>
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => {
        setNewPassword(e.target.value)
        }}/>

            </div>
            <div className="form-floating">
            <label htmlFor="floatingBirthday">Birthday</label>
              <input type="birthday" className="form-control" id="floatingBirthday" placeholder="mm/dd/yyyy" onChange={(e) => {
        setNewBirthday(e.target.value)
        }}/>

            </div>
            <button className="w-100 btn btn-lg btn-primary" onClick = {submitNewUserID}>Sign Up</button>
          </form>
        </main>
      </div>
  );
};

export default SignUpPage;