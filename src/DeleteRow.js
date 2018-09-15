import React, { Component } from 'react';

class DeleteRow extends Component {
	render() {
		return (
		  <button onClick={() => this.props.handleDelete(this.props.value)} value={this.props.value} className="btn btn-xs btn-danger">Delete</button>
		);
	}
}

export default DeleteRow;
