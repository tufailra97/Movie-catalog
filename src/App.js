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
        movieName: ''
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

      this.getMovie();
    }


    //rendering component
    render(){
      const movies = this.state.movies;
      let movieResult;

      if( movies.Search === undefined ){
        movieResult = <p className="text-center">Search to see content</p>
      }else{
        movieResult = <DisplayMovie movieList = {movies}/>;
      }
      return(
        <div className="container-fluid">

          <div>
            <div className="jumbotron align-items-center">
              <h1>Movie Catalog</h1>
              <div>
                <input className="col-lg-9" type="text" onChange={this.movieSearch} placeholder="Movie Name..."/>
                <input type="button" className="btn btn-primary mb-2" value="Search" onClick={this.getMovie}/>
              </div>
            </div>
          </div>
          <div className="container">
            <div>
              {movieResult}
            </div>
          </div>
        </div>
      );
    }
}

export default App;
