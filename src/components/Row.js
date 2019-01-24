import React, { Component } from 'react';
import Square from './Square';

export default class Row extends Component {
  render() {
    const { className, location } = this.props;
    
    const squareClassName = `square ${location}`;

    return (
      <div className={className}>
        <Square className={squareClassName} animate={this.props.animate} reset={this.props.reset} />
        <Square className={squareClassName} animate={this.props.animate} reset={this.props.reset} />
        <Square className={squareClassName} animate={this.props.animate} reset={this.props.reset} />
        <Square className={squareClassName} animate={this.props.animate} reset={this.props.reset} />  
      </div>
    )
  }
}
