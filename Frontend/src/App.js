import './App.css';
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  // const getMovies = () => {
  //   Axios.get('http://localhost:3002/api/movies',{
  //     // movieList: movieList,
  //     result: result,
  //   }).then(() => {
  //     alert('success getting movies')
  //   })
  // };

  const [genreName, newGenre] = useState('');
  const [movieList, setMovieList] = useState([]);
  // const [movieListGenre] = useState('');
  // const [setMovieListGenre] = useState([]);
  // const [movieListGenre, showMovieListByGenre] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3002/api/getMovies').then((response) => {setMovieList(response.data)
  })
  }, [])

  // useEffect(() => {
  //   Axios.get('http://localhost:3002/api/searchByGenre', {params: {
  //     genreName : movieListGenre}}).then((response) => {showMovieListByGenre(response.data)
  // })
  // }, [])

  // const showMovieListByGenre = (movieListGenre) => {
  //   Axios.get(`http://localhost:3002/api/searchByGenre`, movieListGenre)
  //   .then((response) => {
  //     showMovieListByGenre(response.data)
  //   })
  // };
  // this.setState({movieListGenre});


  const submitNewGenre = () => {
    Axios.post('http://localhost:3002/api/insert', {
      genreName: genreName,
    }).then(() => {
      alert('success insert')
    })
  };

  return (
    <div className="App">
      <h1> MOVIE SEEKER </h1>
       <div className = "form">
      <label> Add New Genre:</label> 
      <input type= "text" name = "genreName" onChange={(e) => {
        newGenre(e.target.value)
        }}/>
      <button onClick = {submitNewGenre}> button? </button> 

      {/* <label> put text here </label>
            <input type = "text" id= "movieListGenre" onChange = { (e) => {
              // showMovieListByGenre(e.target.value)
            }}/>
            <button onClick={ () => {
              showMovieListByGenre(movieListGenre)
            }}> this is button </button> */}
      
      {/* {showMovieListByGenre.map((val) => {
        return (
          <div className = "Card">
            <p> MovieName: {val.title}</p>
            <p> Movie Rating: {val.rating} </p>
          </div>
        );
      })} */}

      {movieList.map((val) => {
        return (
          <div className = "card">
            <p> MovieName: {val.title}</p>
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


