// import './App.css';
// import React, {Component, useState, useEffect} from "react";
// import Axios from 'axios';

// function App() {

//   const [newUserId, setNewUserId] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [newBirthday, setNewBirthday] = useState('');
//   const [changePassword, setChangePassword] = useState('');
//   const [oldPassword,setOldPassword] = useState('');
//   const [changeUserId, setChangeUserId] = useState('');
//   const [deletePassword,setDeletePassword] = useState('');
//   const [deleteUserId, setDeleteUserId] = useState('');
//   const [movieIDWatchedMovie, setMovieIDWatchedMovie] = useState('');
//   const [userIDWatchedMovie, setUserIDWatchedMovie] = useState('');
//   const [dateWatchedMovie, setDateWatchedMovie] = useState('');
//   const [timeWatchedMovie, setTimeWatchedMovie] = useState('');
//   const [ratingWatchedMovie, setRatingWatchedMovie] = useState('');
  
//   const [movieSearchGenreName, setSearchMovieByGenre] = useState('');
//   const [returnMovieSearchGenreName, setReturnSearchMovieByGenre] = useState([]);
//   const [searchForUser, setSearchForUser] = useState('');
//   const [returnSearchForUser, setReturnSearchForUser] = useState([]);
//   const [topRatedMovieByGenre, setTopRatedMovieByGenre] = useState([]);

//   /* Get Movies watched by User*/
// const [returnMovieWatchList, setReturnMovieWatchList] = useState([]);

// /* Search Movies watched by User containing substring*/
// const [movieSearchNameKeyword, setMovieSearchNameKeyword] = useState('');
// const [returnMovieSearchNameKeyword, setReturnMovieSearchNameKeyword] = useState([]);

// /* Update a user's movie rating */
// const [newMovieRating, setNewMovieRating] = useState('');

// /* Adv query to get number of movies per genre */
// const [returnNumMoviesPerGenre, setReturnNumMoviesPerGenre] = useState([]);

//   const getMovieSearchByGenre = () => {Axios.get('http://localhost:3002/api/searchMovieByGenre', {
//         params: {
//           movieSearchGenreName : movieSearchGenreName
//         }
//       }).then((response) => { setReturnSearchMovieByGenre(response.data)
//     })
//   };

//   const getUsers = () => {Axios.get('http://localhost:3002/api/searchForUser', {
//         params: {
//           searchForUser : searchForUser
//         }
//       }).then((response) => { setReturnSearchForUser(response.data)
//     })
//   };

//   const getTopRatedMovieByGenre = () => {Axios.get('http://localhost:3002/api/topRatedMovieByGenre', 

//       ).then((response) => { setTopRatedMovieByGenre(response.data)
//     })
//   };

//   const getNumberOfMoviesPerGenre = () => {
//     Axios.get('http://localhost:3002/api/getNumberOfMoviesPerGenre'
//   ).then((response) => {
//     setReturnNumMoviesPerGenre(response.data)
//   })
// };

// const getMovieSearcNameKeyword = () => {
//   Axios.get('http://localhost:3002/api/searchMovieTitles', {
//     params: {
//       movieSearchNameKeyword:movieSearchNameKeyword
//     }
//   }).then((response) => {
//     setReturnMovieSearchNameKeyword(response.data)
//   })
// };

// const getMoviesWatchedByUser = () => {
//   Axios.get('http://localhost:3002/api/searchMoviesWatched', {
//     params: {
//       userIDWatchedMovie:userIDWatchedMovie
//     }
//   }).then((response) => {
//     setReturnMovieWatchList(response.data)
//   })
// };

// const updateMovieWatch = () => {
//   Axios.put(`http://localhost:3002/api/updateReview`, {
//     movieIDWatchedMovie: movieIDWatchedMovie,
//     userIDWatchedMovie: userIDWatchedMovie,
//     newMovieRating: newMovieRating
//   });
//   setNewMovieRating("")
// };

//   const submitNewUserID = () => {
//     Axios.post('http://localhost:3002/api/insertNewUser', {
//       newUserId: newUserId,
//       newPassword: newPassword,
//       newBirthday: newBirthday
//     }).then(() => {
//       alert('success insert')
//     });
//   };

//   const updatePassword = () => {
//     Axios.put('http://localhost:3002/api/updateUserPassword', {
//       changePassword: changePassword,
//       changeUserId : changeUserId,
//       oldPassword: oldPassword
//     }).then(() => {
//       alert('success update')
//     });
//   };

//   const deleteUser = () => {
//     Axios.delete(`http://localhost:3002/api/deleteUser/`, { data: { deleteUserId: deleteUserId,
//                                                                     deletePassword: deletePassword} })
//   };

//   const submitNewWatchMovie = () => {
//     Axios.post('http://localhost:3002/api/insertNewWatchMovie', {
//       movieIDWatchedMovie: movieIDWatchedMovie,
//       userIDWatchedMovie: userIDWatchedMovie,
//       dateWatchedMovie: dateWatchedMovie,
//       timeWatchedMovie: timeWatchedMovie,
//       ratingWatchedMovie: ratingWatchedMovie,
//     }).then(() => {
//       alert('success insert')
//     });
//   };

//   const deleteWatchMovie = () => {
//     Axios.delete(`http://localhost:3002/api/delete/`, {data: {
//       movieIDWatchedMovie: movieIDWatchedMovie,
//       userIDWatchedMovie: userIDWatchedMovie}
//     })
//   };

//   return (
//     <div className="App">
//       <h1> MOVIE SEEKER CRUD</h1>
//       <div className = "form">         
//       <h2> Create New User:</h2>
//       <label>User Id: </label> 
//       <input type= "text" name = "newUserId" onChange={(e) => {
//         setNewUserId(e.target.value)
//         }}/>
//       <label>User Password: </label> 
//         <input type= "text" name = "newPassword" onChange={(e) => {
//         setNewPassword(e.target.value)
//         }}/>
//       <label> Enter your Birthday: </label> 
//         <input type= "text" name = "newBirthday" onChange={(e) => {
//         setNewBirthday(e.target.value)
//         }}/>
//       <button onClick = {submitNewUserID}> submit </button> 

//       <p></p>
//       <h2> Update User Password:</h2>
//       <label>User Id: </label> 
//       <input type= "text" name = "changeUserId" onChange={(e) => {
//         setChangeUserId(e.target.value)
//         }}/>
//       <label>Old Password: </label> 
//         <input type= "text" name = "oldPassword" onChange={(e) => {
//         setOldPassword(e.target.value)
//         }}/>
//       <label> New Password: </label> 
//         <input type= "text" name = "changePassword" onChange={(e) => {
//         setChangePassword(e.target.value)
//         }}/>
//       <button onClick = {updatePassword}> submit </button>

//       <p></p>
//       <h2> Delete User Completely:</h2>
//       <label>User Id: </label> 
//       <input type= "text" name = "deleteUserId" onChange={(e) => {
//         setDeleteUserId(e.target.value)
//         }}/>
//       <label>Password: </label> 
//         <input type= "text" name = "deletePassword" onChange={(e) => {
//         setDeletePassword(e.target.value)
//         }}/>
//       <button onClick = {() => {deleteUser()}}> Delete </button>
//         <p></p>

//       <h2> Search Movie By Genre (top 10 order by rating) </h2>
//       <label>Genre Name: </label> 
//       <input type= "text" name = "movieSearchGenreName" onChange={(e) => {
//         setSearchMovieByGenre(e.target.value)
//         }}/>
//       <button onClick = {() => {getMovieSearchByGenre()}}> Search </button>

//       <p></p>
//         {returnMovieSearchGenreName.map((val) => {
//         return (
//           <div className = "card">
//             <p> Movie Name: {val.title}</p>
//             <p> Movie Rating: {val.rating} </p>
//             <p> Movie Genre: {val.genre} </p>
//           </div>
//         );
//         })}

//       <h2> Search For User </h2>
//       <label>User ID: </label> 
//       <input type= "text" name = "searchForUser" onChange={(e) => {
//         setSearchForUser(e.target.value)
//         }}/>
//       <button onClick = {() => {getUsers()}}> Search </button>

//       <p></p>
//         {returnSearchForUser.map((val) => {
//         return (
//           <div className = "card">
//             <p> User Id: {val.User_id}</p>
//             <p> User Birthday: {val.date_of_birth} </p>
//           </div>
//         );
//         })}
        
//         <h3>See the Top Rated Movie for Each Genre!</h3>
//         <button onClick = {() => {getTopRatedMovieByGenre()}}> ok </button>

//         <p></p>
//         {topRatedMovieByGenre.map((val) => {
//         return (
//           <div className = "card">
//             <p> Movie Name: {val.title}</p>
//             <p> Movie Rating: {val.rating} </p>
//             <p> Movie Genre: {val.genre_name} </p>
//           </div>
//         );
//         })}

//         <h2> Remove a Movie Rating:</h2>
//     <label>Movie ID: </label>
//     <input type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
//       setMovieIDWatchedMovie(e.target.value)
//       }}/>
//      <p></p>
//     <label>User ID: </label>
//       <input type= "text" name = "userIDWatchedMovie" onChange={(e) => {
//       setUserIDWatchedMovie(e.target.value)
//       }}/><p></p>
//       <button onClick = {() => {deleteWatchMovie()}}> DELETE </button>


//         <h2> Rate A Movie That You Watched:</h2>
//      <label>Movie ID: </label>
//      <input type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
//        setMovieIDWatchedMovie(e.target.value)
//        }}/>
//       <p></p>

//      <label>User ID: </label>
//        <input type= "text" name = "userIDWatchedMovie" onChange={(e) => {
//        setUserIDWatchedMovie(e.target.value)
//        }}/><p></p>
//      <label>Date Watched (YYYY-M-D): </label>
//        <input type= "text" name = "dateWatchedMovie" onChange={(e) => {
//        setDateWatchedMovie(e.target.value)
//        }}/><p></p>
//      <label>Time Watched (0-24H:M): </label>
//        <input type= "text" name = "timeWatchedMovie" onChange={(e) => {
//        setTimeWatchedMovie(e.target.value)
//        }}/><p></p>
//      <label>Rating (0-10): </label>
//        <input type= "text" name = "ratingWatchedMovie" onChange={(e) => {
//        setRatingWatchedMovie(e.target.value)
//        }}/><p></p>
//      <button onClick = {submitNewWatchMovie}> submit </button>

//      <h2> Display Movies Watched by User </h2>
// <label> User ID: </label>
//   <input type= "text" name = "userIDWatchedMovie" onChange={(e) => {
//     setUserIDWatchedMovie(e.target.value)
//   }}/>

// <button onClick = {getMoviesWatchedByUser}> Show Me! </button>

// {returnMovieWatchList.map((val) => {
//   return(
//     <div className = "card">
//     <p> Movie Name: {val.title} </p>
//     <p> User's Rating: {val.rating} </p>
//     </div>
//   );
// })}

// <h2> Update a Movie Rating </h2>
// <label>Movie ID: </label>
// <input type= "text" name = "movieIDWatchedMovie" onChange={(e) => {
//   setMovieIDWatchedMovie(e.target.value)
//   }}/>
//  <p></p>
// <label>User ID: </label>
//   <input type= "text" name = "userIDWatchedMovie" onChange={(e) => {
//   setUserIDWatchedMovie(e.target.value)
//   }}/><p></p>
// <label>UPDATED Rating (0-10): </label>
//   <input type= "text" name = "newMovieRating" onChange={(e) => {
//   setNewMovieRating(e.target.value)
//   }}/><p></p>

// <button onClick = {updateMovieWatch}> Update </button>

// <h2> Search Movie Titles </h2>
// <label> Keyword: </label>
//   <input type= "text" name = "movieSearchNameKeyword" onChange={(e) => {
//     setMovieSearchNameKeyword(e.target.value)
//   }}/>

// <button onClick = {getMovieSearcNameKeyword}> Search </button>

// <p></p>

// {returnMovieSearchNameKeyword.map((val) => {
//   return(
//     <div className = "card">
//     <p> Movie Name: {val.title} </p>
//     <p> Movie Rating: {val.rating} </p>
//     </div>
//   );
// })}

// <h2> Show Number of Movies per Genre </h2>
// <button onClick = {getNumberOfMoviesPerGenre}> Show Me! </button>

// <p></p>

// {returnNumMoviesPerGenre.map((val) => {
//   return(
//     <div className = "card">
//     <p> Movie Genre: {val.name} Number of Titles: {val.num} </p>
//     </div>
//   );
// })}

//     </div>
//     </div>
//   );
// }

// // export default Display;
// export default App;

// // npm start

/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import MainPage from "./pages"; ///< index.jsx will be automatically imported 
import AccountInfoPage from "./pages/user";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import WatchedPage from "./pages/watched";
import BrowsePage from "./pages/browse";
import RecommendedPage from "./pages/recommended";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={MainPage} />
       <Route exact path="/AccountInfo" component={AccountInfoPage} />
       <Route exact path="/Login" component={LoginPage} />
       <Route exact path="/SignUp" component={SignUpPage} />
       <Route exact path="/Watched" component={WatchedPage} />
       <Route exact path="/Browse" component={BrowsePage} />
       <Route exact path="/Recommended" component={RecommendedPage} />
      </Router>
    );
  }
}

export default App;
