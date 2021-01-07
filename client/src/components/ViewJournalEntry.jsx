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
    let activityOptions, symptomOptions
    return(
      <Modal show={this.state.show} onHide={this.handleClose} className="modal-90w">
        <Modal.Header closeButton onClick={this.handleClose}>View Your Entry</Modal.Header>
        <Col>
          <Row>
            <Col xl={3}>
              <p>Date</p>
            </Col> 
            <Col>
              <p>{date}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p>Mood</p>
            </Col> 
            <Col>
              <p>{this.state.mood}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p>Sleep</p>
            </Col> 
            <Col>
              <p>{this.state.hoursOfSleep} hours</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p>Activities</p>
            </Col> 
            <Col>
              <p>{this.state.activity1}, {this.state.activity2}, {this.state.activity3}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p>Symptoms</p>
            </Col> 
            <Col>
              <p>{this.state.symptom1}, {this.state.symptom2}, {this.state.symptom3}</p>
            </Col>
          </Row>
          <Row>
            <Col xl={3}>
              <p>Notes</p>
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