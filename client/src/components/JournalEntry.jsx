import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap'

class JournalEntry extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      hasMedication: '',
      mood: 0,
      hoursOfSleep: 0,
      tookMedication: false,
      activity1: '',
      activity2: '',
      activity2: '',
      symptom1: '',
      symptom2: '',
      symptom3: '',
      notes: '',

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

  }


  render() {
    return(
      <Container>
        <Form>
          
        </Form>
      </Container>
    )
  }
}

export default JournalEntry