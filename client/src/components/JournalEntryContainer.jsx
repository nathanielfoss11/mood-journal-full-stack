import React from 'react';
import JournalRecord from './JournalRecord.jsx';

class JournalEntryContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: props.entries
    }
  }

  render() {
    console.log(this.state.entries)
  return (
    this.state.entries.map((entry) =>
      <JournalRecord entry={entry} />
    ))
  }  
}


export default JournalEntryContainer 