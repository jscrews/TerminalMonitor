import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import '../css/CenterList.css'
class TerminalList extends Component {
  render() {
    const { data } = this.props;
    const terminalList = data.map(terminal => {
      return (
        <li key={terminal.id}>Terminal {terminal.id} Operator: {terminal.operator} Cash: ${terminal.cash}
        <br/>
        <div>
          <ProgressBar percentage={terminal.cash} />
        </div>
        </li>
      );
    });
    return (
      <div className='centerList'>
        <ul>
          {terminalList}
        </ul>
      </div>
    );
  }
}

export default TerminalList