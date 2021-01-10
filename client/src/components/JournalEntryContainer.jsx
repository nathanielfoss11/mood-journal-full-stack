import React from 'react';
import JournalRecord from './JournalRecord.jsx';

class JournalEntryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: props.entries
    }
    this.handleModalClick = props.handleModalClick.bind(this)
  }

  render() {
  return (
    this.state.entries.map((entry) =>
      <JournalRecord handleModalClick={this.handleModalClick = this.handleModalClick.bind(this)} entry={entry} />
    ))
  }  
}


export default JournalEntryContainer 