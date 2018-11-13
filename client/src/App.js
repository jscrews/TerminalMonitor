import React, { Component } from 'react';
import './css/App.css';
import TerminalList from "./components/TerminalList";
import Credit from './components/Credit';

class App extends Component {
  render() {
    return(
      <div>
        <TerminalList data={this.props.data}/>
        <Credit/>
      </div>
    )
  }
}

export default App;
