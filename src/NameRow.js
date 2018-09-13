import React, { Component } from 'react';

export const NameRow = ({i,name}) => {
  <tr>
    <td>{i}</td>
		<td>{name}</td>
		<td>{new Date()}</td>
		<td></td>
  </tr>
}

export default NameRow;
