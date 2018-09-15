import React, { Component } from 'react';

class DeleteRow extends Component {
	render() {
		return (
		  <button onClick={() => this.props.handleDelete(this.props.value)} value={this.props.value}>Delete</button>
		);
	}
}

export default DeleteRow;
