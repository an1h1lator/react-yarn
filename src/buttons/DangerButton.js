import React, { Component } from 'react';
import Button from './Button'; // Import a component from another file

class DangerButton extends Component {
  render() {
    return <Button color="red" text={this.props.text}/>;
  }
}

export default DangerButton;