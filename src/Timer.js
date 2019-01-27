import React, { Component } from 'react'

export default class Timer extends Component {
  render() {
    return (
      <div>
        <h1>hours</h1>
        <h1>minutes</h1>
        <h1>seconds</h1>
      </div>
    )
  }
}

setInterval(function(){
    setstate(timer: timer-1000)
    }, 1000)
