import React, { Component } from 'react';
import NameRow from './NameRow';

class TableList extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: []
    }
  }
  render() {
    return (
      <table className="TableList">
      	<thead>
      		<tr>
	      		<td>Serial No</td>
	      		<td>Name</td>
	      		<td>Created At</td>
	      		<td>Action Item</td>
	      	</tr>
      	</thead>
      	<tbody>
      		{this.state.names.map((name, i) => 
      				<NameRow key={i}
      						 name={name}/>
      			)}
      	</tbody>
      </table>
    );
  }
}

export default TableList;
