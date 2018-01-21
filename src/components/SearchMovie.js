import React, { Component } from 'react';
import DisplayMovie from './DisplayMovie'

export default class SearchMovie extends Component {
  constructor(){
    super();

    this.state = {
      movie: ''
    }
  }

  submitSearchMovie = (e) =>{
    e.preventDefault();
    this.props.result("IN");
    console.log("TR");
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitSearchMovie}>
          <div>
            <label htmlFor="movie">Movie</label>
            <input type="text" placeholder="Movie Name..."/>
          </div>
          <input type="submit"/>
        </form>

        <DisplayMovie />
      </div>
    );
  }
}
