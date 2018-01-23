import React, { Component } from 'react';


export default class DisplayMovie extends Component {
  constructor(props){
    super(props);

    this.state = {
      movies: this.props.movies
    }
  }



  render(){
    return(
      <div>
        <h1>movie:{console.log(this.state.movies)}</h1>
      </div>
    );
  }
}
