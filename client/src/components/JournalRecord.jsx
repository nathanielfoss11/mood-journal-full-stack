import React from 'react';
import ReactDOM from 'react-dom'
import ViewJournalEntry from './ViewJournalEntry.jsx'
import EditJournalEntry from './EditJournalEntry.jsx'
import { Container, Form, Button, Col, Row } from 'react-bootstrap'

class JournalRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entryId: props.entry.entry_id,
      userId: props.entry.user_id,
      username: props.entry.username,
      hasMedication: props.entry.hasMedication,
      mood: props.entry.mood,
      hoursOfSleep: props.entry.hours_of_sleep,
      activity1: props.entry.activity1,
      activity2: props.entry.activity2,
      activity2: props.entry.activity3,
      symptom1: props.entry.symptom1,
      symptom2: props.entry.symptom2,
      symptom3: props.entry.symptom3,
      tookMedication: props.entry.took_medication,
      notes: props.entry.notes,
      entryDate: props.entry.entry_date,
      viewEntry: false,
      readMore: false,
    }
    this.handleViewClick = this.handleViewClick.bind(this);
    this.handleViewEntry = this.handleViewEntry.bind(this);
    this.handleReadMore = this.handleReadMore.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditEntry = this.handleEditEntry.bind(this);
    this.handleModalClick = props.handleModalClick.bind(this);
  }

  handleViewClick(event) {
    event.preventDefault();
    this.setState({viewEntry: true});
    this.handleViewEntry();
  }

  handleEditClick(event) {
    event.preventDefault();
    this.setState({viewEntry: true});
    this.handleEditEntry();
  }

  handleViewEntry() {
    ReactDOM.render(<ViewJournalEntry user={this.state} />, document.getElementById('modal'));
  }

  handleEditEntry() {
    ReactDOM.render(<EditJournalEntry handleModalClick={
      this.handleModalClick = this.handleModalClick.bind(this)} user={this.state} />, document.getElementById('modal'));
  }

  handleReadMore() {
    if(this.state.readMore === false) {
      this.setState({readMore: true});
    } else {
      this.setState({readMore: false});
    }
  }

  render() {
    let date = '';
    let shortDate = this.state.entryDate.slice(0, 10);
    let splitDate = shortDate.split('-');
    if(splitDate[1] === '01') {
      date = `January ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '02') {
      date = `February ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '03') {
      date = `March ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '04') {
      date = `April ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '05') {
      date = `May ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '06') {
      date = `June ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '07') {
      date = `July ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '08') {
      date = `August ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '09') {
      date = `September ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '10') {
      date = `October ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '11') {
      date = `November ${splitDate[2]}, ${splitDate[0]}`
    } else if(splitDate[1] === '12') {
      date = `December ${splitDate[2]}, ${splitDate[0]}`
    }

    let mood;
    if(this.state.mood === 1) {
      mood = <img src='https://i.ibb.co/F0rqT9T/one.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 2) {
      mood = <img src='https://i.ibb.co/hWjCmDD/two.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 3) {
      mood = <img src='https://i.ibb.co/wcmnkL3/three.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 4) {
      mood = <img src='https://i.ibb.co/5krKP82/four.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === 5) {
      mood = <img src='https://i.ibb.co/pW74MGg/five.png' width='45px' id='moodOnRecord'/>
    } else {
      mood = <p>-</p>
    }

    let notes, hours, expand;
    if(this.state.notes.length > 50 && this.state.readMore === false) {
      notes = this.state.notes.slice(0, 50);
      expand = <a onClick={this.handleReadMore}>...Read More</a>
    } else if(this.state.readMore === true) {
      notes = this.state.notes;
      expand = <a onClick={this.handleReadMore}><b>&nbsp; Read Less</b></a>
    } else{
      notes = this.state.notes;
    }

    if(this.state.hoursOfSleep === 1) {
      hours = 'hour';
    } else {
      hours = 'hours';
    }

    return(
      <Row id='journalRecord'>
        <Col xl={2}>
          <p id='dateRecord'>{date}</p>
        </Col>
        <Col xl={1}>
          {mood}
        </Col>
        <Col xl={1}>
          <p id='dateRecord'>{this.state.hoursOfSleep} {hours}</p>
        </Col>
        <Col>
          <p id='dateRecord' >{notes}{expand}</p>
        </Col>
        <Col xl={1}>
          <Button onClick={this.handleViewClick} id='viewEntry'>View</Button>
        </Col>
        <Col xl={1}>
          <Button onClick={this.handleEditClick} id='viewEntry'>Edit</Button>
        </Col>
     </Row>
    )
  } 
}

export default JournalRecord