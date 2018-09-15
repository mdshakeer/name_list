import React, { Component } from 'react';
import InputBox from './InputBox';
import TableList from './TableList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      total: 0,
      names: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
      this.setState({input: event.target.value});
  }
  handleSubmit(event) {
      let names = [...this.state.names];

      names.push({
        name: this.state.input,
        date_time: new Date()
      });

      this.setState({
        total: this.state.total+1,
        names: names
      }); 
      console.log(this.state.names);
      event.preventDefault();
  }
  handleDelete(i){
      let names = [...this.state.names];

      names.splice(i, 1);
      this.setState({
        total: this.state.total-1,
        names: names
      });
      console.log(i);
  }
  render() {
    return (
      <div className="App">
        <InputBox handleSubmit={ this.handleSubmit } 
          handleChange={ this.handleChange }
          textInput={ this.state.input }/>
        <TableList names={this.state.names}
          total={this.state.total}
          handleDelete={ this.handleDelete }/>
      </div>
    );
  }
}

export default App;
