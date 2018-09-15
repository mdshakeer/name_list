import React, { Component } from 'react';
import DeleteRow from './DeleteRow';

class TableList extends Component {
	handleDelete = (i) => {
		this.props.handleDelete(i)
	}
  render() {
  	const names = this.props.names;
  	const total = this.props.total;
  	let i = total;
    return (
      <table className="TableList table table-bordered table-striped mt-20">
      	<thead>
      		<tr>
	      		<th>Serial No</th>
	      		<th>Name</th>
	      		<th>Created At</th>
	      		<th>Action Item</th>
	      	</tr>
      	</thead>
      	<tbody>
	      	{names.map(name => {
	      	  i-=1;
	          return (
	            <tr key={name.id}>
	            	<td>{total-i}</td>
	            	<td>{name.name}</td>
					<td>{name.date_time.toString()}</td>
					<td><DeleteRow handleDelete={this.props.handleDelete} value={total-i-1}/></td>
	            </tr>
	          );
	        })}
      	</tbody>
      </table>
    );
  }
}

export default TableList;
