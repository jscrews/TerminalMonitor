import React, { Component } from 'react';
import './App.css';
import TerminalList from './components/TerminalList'

class App extends Component {
  render() {
    return(
      <div>
        <TerminalList data={this.props.data}/>
      </div>
    )
  }
}

export default App;
