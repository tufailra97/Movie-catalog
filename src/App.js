import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie'

//IMBD API KEY
const IMBD_API = "http://www.omdbapi.com/?apikey=1f17b25e&s=";

class App extends Component {

    constructor(){
      super();
      this.state = {
        movies: [],
        movieName: 'batman'
      }
    }

    componenWillMount(){
      this.state = {
        movies: [],
        movieName: 'batman'
      }
    }


    //api search for movie
    getMovie = () =>{
      //variables
      const req = new XMLHttpRequest();
      let data;

      //request for searching the movie
      req.open('GET', IMBD_API + encodeURI(this.state.movieName));

      //parsing data
      req.onload = () =>{
        data = JSON.parse(req.responseText);
        this.setState({
          movies: data
        });
      }
      req.send();

    }

    render(){
      return(
        <div className="container-fluid col-sm-6 jump">
          <div className="jumbotron">
            <SearchMovie />
            <input type="text" onChange={this.movieSearch}/>
            <button onClick={this.getMovie}>Search</button>
          </div>

          <div className="container">
            <div className="row">
              {
                this.state.movies.Search.map(function(movie, index){
                  return (<li key={index}>{movie.Title}</li>)
                })}
              }
            </div>
          </div>
        </div>
      );
    }
}

export default App;
