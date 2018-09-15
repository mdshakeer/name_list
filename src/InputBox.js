import React, { Component } from 'react';

class InputBox extends Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
	}
	render() {
		return (
		  <form className="InputBox" onSubmit={this.props.handleSubmit}>
		  	<input type="text" value={this.props.textInput}  onChange={this.props.handleChange}/>
		  	<input type="submit" value="Submit" />
		  </form>
		);
	}
}

export default InputBox;
