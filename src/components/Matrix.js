import React, { Component } from 'react';
import Row from '../components/Row';

export default class Matrix extends Component {

  /**
   * Reset the square colours to a new random arrangement
   */
  reset = () => {
    // Reset existing green squares
    let resetArray = Array.from(document.getElementsByClassName('green-square'));
    resetArray.length > 0 && resetArray.forEach(square => square.classList.remove("green-square"));

    // Reset existing purple squares
    resetArray = Array.from(document.getElementsByClassName('purple-square'));
    resetArray.length > 0 && resetArray.forEach(square => square.classList.remove("purple-square"));

    // Generate new coloured squares
    let squaresArray = Array.from(document.getElementsByClassName('square'));

    // seven random green squares
    if (squaresArray.length > 0) {
      for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * 16);
        squaresArray[x].classList.add("green-square");
      }

      // one random purple
      let x = Math.floor(Math.random() * 16);

      // remove green square class so purple clicks don't animate
      squaresArray[x].classList.remove("green-square");    
      squaresArray[x].classList.add("purple-square");
    }
  }

  /**
   * Animations are done by adding CSS classes / transitions to
   * the matrix component
   */
  animate = (animationName) => {
    this.resetAnimation();
    document.getElementById('matrix-container').classList.add(animationName);
  }

  resetAnimation= () => {
    document.getElementById('matrix-container').classList.remove('home','ceiling','tip-right','level-out','pull-back');
  }

  // Trigger the coloured squares right as squares finish descending
  componentDidMount() {
    setTimeout(() => this.reset(), 3600);
  }
  
  /**
   * Each row has its own set of hardcoded styles/dimensions in order to preserve
   * the consistency of the perspective effect
   */
  render() {
    return (
      <div id="matrix-container">
        <Row className="back" animate={this.animate} reset={this.reset} />
        <Row className="mid-back" animate={this.animate} reset={this.reset} />
        <Row className="mid-front" animate={this.animate} reset={this.reset} />
        <Row className="front" animate={this.animate} reset={this.reset} />
      </div>
    )
  }
}
