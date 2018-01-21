import React, { Component } from 'react';


export default class DisplayMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: ''
    }
  }

  render(){
    return(
      <div>
        <h1>Display Movie</h1>
      </div>
    );
  }
}
