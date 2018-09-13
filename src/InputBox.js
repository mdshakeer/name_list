import React, { Component } from 'react';

class InputBox extends Component {
  render() {
    return (
      <form className="InputBox">
      	<input type="text"/>
      	<input type="button" value="Submit"/>
      </form>
    );
  }
}

export default InputBox;
