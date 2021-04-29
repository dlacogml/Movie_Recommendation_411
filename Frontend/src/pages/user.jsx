/*user.jsx*/
import React, {Component, useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';


// const AccountInfoPage = () => {
function AccountInfoPage() {
  const USER_ID = sessionStorage.getItem('userID');

  const[UserId, setUserID]=useState('');
  const[Password, setPassword]=useState('');

  const[OldPassword, setOldPassword]=useState('');
  const[NewPassword, setNewPassword]=useState('');

  const[streamingServiceUpdate, setStreamingServiceUpdate]=useState('');

  const[returnUserAccountInfo, setReturnUserAccountInfo]=useState([]);
  const[returnUserAccountSubscribed, setReturnUserAccountSubscribed]=useState([]);

  const getAccountInfo = () => {
    Axios.get(`https://cs411-teamteam.uc.r.appspot.com/api/fetchAccountInfo`,
    {
      params: {
        UserId: USER_ID
      }
    }).then((response) => {
      setReturnUserAccountInfo(response.data)
    })
    Axios.get(`https://cs411-teamteam.uc.r.appspot.com/api/fetchAccountSubscribed`,
    {
      params: {
        UserId: USER_ID
      }
    }).then((response) => {
      setReturnUserAccountSubscribed(response.data)
    })
  };

  const updateUserPassword = () => {
    Axios.put(`https://cs411-teamteam.uc.r.appspot.com/api/updatePassword`, {
      UserId : USER_ID,
      OldPassword : OldPassword,
      NewPassword : NewPassword
    });
  };

  const InsertStreamingService = () => {
    Axios.put(`https://cs411-teamteam.uc.r.appspot.com/api/insertStreamingService`, {
      Name : streamingServiceUpdate,
      UserId : USER_ID
    });
  };

  const deleteUserAccount = () => {
    Axios.delete(`https://cs411-teamteam.uc.r.appspot.com/api/deleteUser/`,
    {data: {
      UserId: UserId,
      Password: Password
    }})
  };

  const deleteStreamingService = () => {
    Axios.delete(`https://cs411-teamteam.uc.r.appspot.com/api/deleteStreamingService`,
    {data: {
      Name: streamingServiceUpdate,
      UserId : USER_ID
    }})
  };

  return (
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
          <h2>Your Account Info</h2>
          <button onClick = {() => {getAccountInfo()}} className="btn btn-outline-primary me-2">Show Account Details</button>
          <p>* * *</p>
          <div className="text-end">
            {
              returnUserAccountInfo.map((val) => {
                return(
                  <div>
                    <p>User Id: {val.User_id} </p>
                    <p>Birthday: {val.date_of_birth} </p>
                  </div>
                );
              })
            }
          </div>
          <h3> Subscriptions </h3>
          <p>* * *</p>
          <div className="text-end">
            {
              returnUserAccountSubscribed.map((val) => {
                return(
                  <div>
                    <p>{val.Name}</p>
                  </div>
                );
              })
            }
          </div>

          <p>* * *</p>
          <div className="text-end">
            <h3>Subscription Update</h3>
            <label>Subscription Name</label>
            <div className="container"></div>
            <input className = "text" type="text" name="streamingServiceUpdate" onChange={(e) => {setStreamingServiceUpdate(e.target.value)}}/>
            <div className="container"></div>
            <p>
            <div className="container"></div>
              <button onClick = {InsertStreamingService} className="btn btn-outline-primary me-2">Insert</button>
            </p>
            <div className="container"></div>
              <button onClick = {deleteStreamingService} className="btn btn-outline-primary me-2">Delete</button>
          </div>

          <p>* * *</p>
          <div className="text-end">
            <p>Update Your Password</p>
            <label>Confirm UserId</label>
            <div className="container"></div>
            <input className = "text" type="text" name="UserID" onChange={(e) => {setUserID(e.target.value)}}/>
            <div className="container"></div>
            <label>Old Password</label>
            <div className="container"></div>
            <input className = "text" type="text" name="OldPassword" onChange={(e) => {setOldPassword(e.target.value)}}/>
            <div className="container"></div>
            <label>New Password</label>
            <div className="container"></div>
            <input className = "text" type="text" name="NewPassword" onChange={(e) => {setNewPassword(e.target.value)}}/>
            <p>
            <div className="container"></div>
              <button onClick = {updateUserPassword} className="btn btn-outline-primary me-2">Update</button>
            </p>
          </div>
          
          <p>* * *</p>
          <div className="text-end">
            <p>Delete Your Account [PERMANENT]</p>
            <label>Confirm Username</label>
            <div className="container"></div>
            <input className = "text" type="text" name="UserID" onChange={(e) => {setUserID(e.target.value)}}/>
            <div className="container"></div>
            <label>Confirm Password</label>
            <div className="container"></div>
            <input className = "text" type="text" name="Password" onChange={(e) => {setPassword(e.target.value)}}/>
            <p>
              <button onClick = {deleteUserAccount} className="btn btn-outline-primary me-2">Delete</button>
            </p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default AccountInfoPage;