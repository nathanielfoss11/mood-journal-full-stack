import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import one from './one.png'

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
      date: '',

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    console.log(this.state)
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
    let activityOptions, symptomOptions
    return(
      <Container>
        <Form>
          <Col>
            <Row>
              <Col fluid>
                <Row>
                  <Col>
                    <Form.Label>Mood*</Form.Label>
                  </Col>
                </Row>
                <Row id='moodRow'>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='1' id='customRating'>
                      <img width='100px' src={one} />
                    </Form.Check>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='2' id='customRating'/>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='3' id='customRating'/>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='4' id='customRating'/>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='5' id='customRating'/>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group name='date'>
                  <Form.Label>Date*</Form.Label>
                  <Form.Control type='date' name='date' value={this.state.date} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='hoursOfSleep'>
                  <Form.Label>Hours of sleep</Form.Label>
                  <Form.Control type='number' name='hoursOfSleep' value={this.state.hoursOfSleep} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group name='activity1'>
                  <Form.Label>Activity 1</Form.Label>
                  <Form.Control as='select' name='activity1' value={this.state.activity1} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='work'>Work</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='activity2'>
                  <Form.Label>Activity 2</Form.Label>
                  <Form.Control as='select' name='activity2' value={this.state.activity2} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='work'>Work</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='activity3'>
                  <Form.Label>Activity 3</Form.Label>
                  <Form.Control as='select' name='activity3' value={this.state.activity3} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='work'>Work</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group name='symptom1'>
                  <Form.Label>Symptom 1</Form.Label>
                  <Form.Control as='select' name='symptom1' value={this.state.symptom1} onChange={this.handleChange}>
                    {activityOptions}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='symptom2'>
                  <Form.Label>Symptom 2</Form.Label>
                  <Form.Control as='select' name='symptom2' value={this.state.symptom2} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='symptom3'>
                  <Form.Label>Symptom 3</Form.Label>
                  <Form.Control as='select' name='symptom3' value={this.state.symptom3} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group name='notes'>
                  <Form.Label>Notes:</Form.Label>
                  <Form.Control as='textarea' name='notes' value={this.state.notes} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type='submit'>Submit</Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </Container>
    )
  }
}

export default JournalEntry