import React, { Component } from 'react';
import DisplayMovie from './components/DisplayMovie';
//IMBD API KEY
const IMBD_API = "http://www.omdbapi.com/?apikey=1f17b25e&s=";

class App extends Component {
    //main constructor
    constructor(){
      super();
      this.state = {
        movies: [],
        movieName: 'batman'
      }

    }


    //return movie search
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


    //return state with the movie
    movieSearch = (e) =>{
      this.setState({
        movieName: e.target.value
      });
    }


    //rendering component
    render(){
      const movies = this.state.movies;
      let movieResult;

      if( movies != undefined ){
        movieResult = <DisplayMovie movieList = {this.state.movies}/>;
      }else{
        movieResult = "Search movie to see result";
      }
      return(
        <div className="container-fluid">
          <div className="jumbotron">
            <input type="text" onChange={this.movieSearch}/>
            <button className="btn btn-secondary" onClick={this.getMovie}>Search</button>
          </div>

          <div className="container">
            <div>
              <ul className="row">
                <DisplayMovie movieList = {this.state.movies}/>
              </ul>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
