import React, { Component } from 'react';
import SearchMovie from './components/SearchMovie'

//IMBD API KEY
const IMBD_API = "http://www.omdbapi.com/?apikey=1f17b25e&t=";

class App extends Component {

    constructor(){
      super();
      this.state = {
        movieName: 'Batman',
        img: ''
      }
    }

    getMovie = () =>{
      const req = new XMLHttpRequest();
      let data;

      req.open('GET', IMBD_API + encodeURI(this.state.movieName));

      req.onload = () =>{
        data = JSON.parse(req.responseText);
        console.log(data.Title);
        console.log(data);

        this.setState({
          img: data.Poster
        });
      }
      req.send();
    }

    resultMovie = (e) =>{
      console.log(e);
    }

    movieSearch = (e) =>{
      this.setState({
        movieName: e.target.value
      });

      this.getMovie();
    }

    render(){
      return(
        <div>
          <SearchMovie result={this.resultMovie}/>
          <input type="text" onChange={this.movieSearch}/>
          <h1 onClick={this.getMovie}>Search</h1>
          <img src={this.state.img} alt=""/>
        </div>
      );
    }
}

export default App;
