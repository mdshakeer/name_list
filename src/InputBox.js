import React, { Component } from 'react';

class InputBox extends Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
	}
	render() {
		return (
		  <form className="InputBox col-lg-12 form-inline" onSubmit={this.props.handleSubmit}>
		  	<input type="text" className="form-control col-lg-10" value={this.props.textInput}  onChange={this.props.handleChange}/>
		  	<input type="submit" value="Submit" className="btn btn-success" />
		  </form>
		);
	}
}

export default InputBox;
