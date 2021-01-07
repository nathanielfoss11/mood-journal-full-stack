import React from 'react';
import { Container, Form, Button, Col, Row, Modal} from 'react-bootstrap';
import axios from 'axios';

class ViewJournalEntry extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      show: true,
      entryId: props.user.entryId,
      userId: props.user.userId,
      username: props.user.username,
      hasMedication: '',
      mood: props.user.mood.toString(),
      hoursOfSleep: props.user.hoursOfSleep,
      tookMedication: props.user.tookMedication,
      activity1: props.user.activity1,
      activity2: props.user.activity2,
      activity2: props.user.activity2,
      symptom1: props.user.symptom1,
      symptom2: props.user.symptom2,
      symptom3: props.user.symptom3,
      notes:  props.user.notes,
      entryDate: props.user.entryDate.slice(0, 10)
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({show: false})
  }

  render() {
    let date = '';
    let shortDate = this.state.entryDate.slice(0, 10)
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
    let activity1, activity2, symptom1, symptom2, symptomOptions

    if(this.state.activity2 !== undefined) {
      activity1 = this.state.activity1 + ','
    } else {
      activity1 = this.state.activity1
    }
    if(this.state.activity3 !== undefined) {
      activity2 = this.state.activity2 + ','
    } else {
      activity2 = this.state.activity2
    }
    if(this.state.symptom2 !== undefined) {
      symptom1 = this.state.symptom1 + ','
    } else {
      symptom1 = this.state.symptom1
    }
    if(this.state.symptom3 !== undefined) {
      symptom2 = this.state.symptom2 + ','
    } else {
      symptom2 = this.state.symptom2
    }
    let mood;
    if(this.state.mood === '1') {
      mood = <img src='https://i.ibb.co/F0rqT9T/one.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === '2') {
      mood = <img src='https://i.ibb.co/hWjCmDD/two.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === '3') {
      mood = <img src='https://i.ibb.co/wcmnkL3/three.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === '4') {
      mood = <img src='https://i.ibb.co/5krKP82/four.png' width='45px' id='moodOnRecord'/>
    } else if (this.state.mood === '5') {
      mood = <img src='https://i.ibb.co/pW74MGg/five.png' width='45px' id='moodOnRecord'/>
    } else {
      mood = <p>-</p>
    }
    return(
      <Modal show={this.state.show} onHide={this.handleClose} className="modal-90w">
        <Modal.Header closeButton onClick={this.handleClose}><b>View Your Entry</b></Modal.Header>
        <Col>
          <Row>
            <br />
            <br />
            <Col xl={3}>
              <p><b>Date:</b></p>
            </Col> 
            <Col>
              <p>{date}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p><b>Mood:</b></p>
            </Col> 
            <Col>
              <p>{mood}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p><b>Sleep:</b></p>
            </Col> 
            <Col>
              <p>{this.state.hoursOfSleep} hours</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p><b>Activities:</b></p>
            </Col> 
            <Col>
              <p>{activity1} {activity2} {this.state.activity3}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p><b>Symptoms:</b></p>
            </Col> 
            <Col>
              <p>{symptom1} {symptom2} {this.state.symptom3}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p><b>Notes:</b></p>
            </Col> 
            <Col>
              <p>{this.state.notes}</p>
            </Col>
          </Row>
        </Col>
      </Modal>
    )
  }
}

export default ViewJournalEntry