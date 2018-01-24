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

    componentWillMount(){
      this.setState({
        movieName: 'batman'
      });
    }


    //return movie search
    getMovie = (e) =>{
      e.preventDefault();
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

      if( movies.Search === undefined ){
        movieResult = <p className="text-center">Search to see content</p>
      }else{
        movieResult = <DisplayMovie movieList = {movies}/>;
      }
      return(
        <div className="container-fluid">
          <form className="jumbotron form-row align-items-center" onSubmit={this.getMovie}>
            <div className="col-auto">
              <label className="sr-only" htmlFor="movie">Movie</label>
              <input className="form-control mb-2" type="text" onChange={this.movieSearch} placeholder="Movie Name..."/>
            </div>
            <input type="submit" className="btn btn-primary mb-2" value="Search"/>
          </form>

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
