import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap'

class JournalRecord extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: props.entry.user_id,
      username: props.entry.username,
      hasMedication: props.entry.hasMedication,
      mood: props.entry.mood,
      hoursOfSleep: props.entry.hours_of_sleep,
      tookMedication: props.entry.took_medication,
      activity1: props.entry.activity1,
      activity2: props.entry.activity2,
      activity2: props.entry.activity3,
      symptom1: props.entry.symptom1,
      symptom2: props.entry.symptom2,
      symptom3: props.entry.symptom3,
      notes: props.entry.notes,
      viewEntry: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {

  }

  render() {
    let viewMore;
    if(this.state.viewEntry === true) {
      <Row>
        
      </Row>
    }
    return(
      <Row>
        <Col>
        {/* mood */}
        </Col>
        <Col>
        {/* date */}
        </Col>
        <Col>
        {/* notes */}
        </Col>
        <Col>
        {/* viewEntry */}
        </Col>
      </Row>
    )
  }
}

export default JournalRecord