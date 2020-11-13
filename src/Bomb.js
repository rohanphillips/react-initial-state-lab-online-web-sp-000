// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  bombDecision = () => {
    let myReturn;
    if (this.state.secondsLeft > 0){
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return "Boom!"
    }
  }
  render() {
    return (
      <div>
        {this.bombDecision()}
      </div>
    );
  }
}