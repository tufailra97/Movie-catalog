import React, { Component } from 'react';


export default class DisplayMovie extends Component {
  constructor(){
    super();

    this.state = {
      movies: this.props.movies
    }
  }



  render(){
    return(
      <div>
        <h1>movie:{this.state.movies.Title}</h1>
      </div>
    );
  }
}
