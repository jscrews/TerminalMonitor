import React, { Component } from 'react'

class TerminalList extends Component {
  render() {
    const { data } = this.props;
    const terminalList = data.map(terminal => {
      return (
        <li key={terminal.id}>Terminal {terminal.id} Operator: {terminal.operator}</li>
      );
    });
    return (
      <ul>
        {terminalList}
      </ul>
    );
  }
}

export default TerminalList