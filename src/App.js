import React, { Component } from 'react';
import InputBox from './InputBox';
import TableList from './TableList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputBox/>
        <TableList/>
      </div>
    );
  }
}

export default App;
