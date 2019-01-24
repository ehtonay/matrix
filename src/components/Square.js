import React, { Component } from 'react';

export default class Square extends Component {
  state = {
    active: false,
    animation: ['home', 'ceiling', 'pull-back', 'level-out', 'tip-right']
  };

  handleClick = (e) => {
    if (e.target.classList.contains('green-square')) {
      e.target.classList.remove('green-square');
      let rand = Math.floor(Math.random() * 5);
      this.props.animate(this.state.animation[rand]);
    }
    else if (e.target.classList.contains('purple-square')) {
      this.props.reset();
    }
  }

  componentDidMount() {
    let i = Math.floor(Math.random() * 750);
    setTimeout(() => { this.setState({ active: true }) }, i);
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`${className} ${this.state.active && 'animation drop'}`} onClick={this.handleClick} />
    );
  }
}
