import './App.css';
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [newUserId, setNewUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newBirthday, setNewBirthday] = useState('');
  const [Name, setServiceName] = useState('');
  const [userID, setUserID] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3002/api/getMovies').then((response) => {setMovieList(response.data)
  })
  }, [])


  const submitNewUserID = () => {
    Axios.post('http://localhost:3002/api/insertNewUser', {
      newUserId: newUserId,
      newPassword: newPassword,
      newBirthday: newBirthday
    }).then(() => {
      alert('success insert')
    });
  };

  // const updatePassword = () => {
  //   Axios.put();

  // };

  const submitNewStreaming = () => {
    console.log("Try to call insert");
    Axios.post('https://localhost:3002/api/insertSubscribed', {
      Name: Name,
      userID: userID
    }).then(() => {
      alert('successful insert')
    });
    console.log("Tried to call insert");
  };

  return (
    <div className="App">
      <h1> MOVIE SEEKER CRUD</h1>
      <div className = "form">         
      <h2> Create New User:</h2>
      <label>User Id: </label> 
      <input type= "text" name = "newUserId" onChange={(e) => {
        setNewUserId(e.target.value)
        }}/>
      <label>User Password: </label> 
        <input type= "text" name = "newPassword" onChange={(e) => {
        setNewPassword(e.target.value)
        }}/>
      <label> Enter your Birthday: </label> 
        <input type= "text" name = "newBirthday" onChange={(e) => {
        setNewBirthday(e.target.value)
        }}/>
      <button onClick = {submitNewUserID}> submit </button> 

      <p></p>

      <label>Streaming Platform Name:</label>
      <input type="text" name= "Name" onChange={(e) =>{
          setServiceName(e.target.value)
        }} />
        <label>User ID:</label>
        <input type="text" name="userID" onChange={(e) => {
          setUserID(e.target.value)
        }}/>
        <button onClick = {submitNewStreaming}> Submit </button>


      {movieList.map((val) => {
        return (
          <div className = "card">
            <p> Movie Name: {val.title}</p>
            <p> Movie Rating: {val.rating} </p>
          </div>
        );
      })}
    </div>
    </div>
  );
}

// export default Display;
export default App;

// npm start
