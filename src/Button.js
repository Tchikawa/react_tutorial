import React, { Component } from 'react';

class Button extends Component {

  handleClick = () => {
    this.props.changeState(this.props.rowNo, this.props.colNo)
  }

  render() {
    console.log(this.props.text)
    if (this.props.text === "" && this.props.message === null) {
      return (
        <button onClick={this.handleClick}>
          {this.props.text}</ button >
      )
    } else {
      return (<button disabled>{this.props.text}</button>)
    }

  }
}

export default Button;