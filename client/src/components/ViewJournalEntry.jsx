import React from 'react';
import { Container, Form, Button, Col, Row, Modal} from 'react-bootstrap';
import axios from 'axios';

class ViewJournalEntry extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      show: true,
      userId: props.user.user_id,
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
      date: props.user.entryDate.slice(0, 10),
      moodClicked: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleMoodClick = this.handleMoodClick.bind(this)
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({show: false})
  }

  handleChange(event) {
    console.log(event)
    const target = event.target;
    const value = target.value;
    console.log(value)
    const name = target.name;
    console.log(name)
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const userId = this.state.userId
    const journalObj = {
      user_id: this.state.userId,
      entry_date: this.state.date,
      mood: this.state.mood,
      hours_of_sleep: this.state.hoursOfSleep,
      activity1: this.state.activity1,
      activity2: this.state.activity2,
      activity3: this.state.activity3,
      symptom1: this.state.symptom1,
      symptom2: this.state.symptom2,
      symptom3: this.state.symptom3,
      took_medication: this.state.tookMedication,
      notes: this.state.notes,
    }
    axios.post(`/users/${userId}/journal`, journalObj)
    .then((results) => console.log('Success'))
    .catch((err) => console.log(err))
  }

  handleMoodClick(event) {
    const target = event.target;
    const value = target.alt;
    console.log(value)
    const name = target.name;
    console.log(name)
    this.setState({[name]: value});
    console.log(this.state)
  }


  render() {
    let activityOptions, symptomOptions
    return(
      <Modal show={this.state.show} onHide={this.handleClose} className="modal-90w">
        <Modal.Header closeButton onClick={this.handleClose}></Modal.Header>
        <Form id='journalEntry'>
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
                      <img width='75px' name='mood' src='https://i.ibb.co/F0rqT9T/one.png' className={this.state.mood === '1' ? 'moodFaceSelected': 'moodFace'}  alt='1'  onClick={this.handleMoodClick}/>
                    </Form.Check>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='2' id='customRating'>
                    <img width='75px' name='mood' src="https://i.ibb.co/hWjCmDD/two.png" alt='2' className={this.state.mood === '2' ? 'moodFaceSelected': 'moodFace'} onClick={this.handleMoodClick} />
                    </Form.Check>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='3' id='customRating'>
                      <img src="https://i.ibb.co/wcmnkL3/three.png" name='mood' alt='3' id='moodFace' width='75px'  className={this.state.mood === '3' ? 'moodFaceSelected': 'moodFace'} onClick={this.handleMoodClick}/>
                    </Form.Check>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='4' id='customRating'>
                      <img src="https://i.ibb.co/5krKP82/four.png" name='mood' alt='4' width='75px' className={this.state.mood === '4' ? 'moodFaceSelected': 'moodFace'}  onClick={this.handleMoodClick}/>
                    </Form.Check>
                  </Col>
                  <Col>
                    <Form.Check inline type='radio' name='mood' value='5' id='customRating'>
                      <img src="https://i.ibb.co/pW74MGg/five.png" name='mood' alt='5' width='75px' className={this.state.mood === '5' ? 'moodFaceSelected': 'moodFace'}  onClick={this.handleMoodClick}/>
                    </Form.Check>
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
                  <Form.Control type='number' name='hoursOfSleep' step='0.5' value={this.state.hoursOfSleep} onChange={this.handleChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group name='activity1'>
                  <Form.Label>Activity 1</Form.Label>
                  <Form.Control as='select' name='activity1' value={this.state.activity1} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='bingedTheOffice'>Binged The Office</option>
                    <option value='cleaning'>Cleaning</option>
                    <option value='date'>Date</option>
                    <option value='family'>Family</option>
                    <option value='friends'>Friends</option>
                    <option value='healthyMeal'>Healthy Meal</option>
                    <option value='meditation'>Meditation</option>
                    <option value='movies'>Movies</option>
                    <option value='party'>Party</option>
                    <option value='reading'>Reading</option>
                    <option value='relax'>Relax</option>
                    <option value='school'>School</option>
                    <option value='shop'>Shop</option>
                    <option value='stretch'>Stretch</option>
                    <option value='walkedDog'>Walked Dog</option>
                    <option value='work'>Work</option>
                    <option value='workout'>Workout</option>
                    <option value='yoga'>Yoga</option>
                    {/* <option value=''></option>
                    <option value=''></option> */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='activity2'>
                  <Form.Label>Activity 2</Form.Label>
                  <Form.Control as='select' name='activity2' value={this.state.activity2} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='bingedTheOffice'>Binged The Office</option>
                    <option value='cleaning'>Cleaning</option>
                    <option value='date'>Date</option>
                    <option value='family'>Family</option>
                    <option value='friends'>Friends</option>
                    <option value='healthyMeal'>Healthy Meal</option>
                    <option value='meditation'>Meditation</option>
                    <option value='movies'>Movies</option>
                    <option value='party'>Party</option>
                    <option value='reading'>Reading</option>
                    <option value='relax'>Relax</option>
                    <option value='school'>School</option>
                    <option value='shop'>Shop</option>
                    <option value='stretch'>Stretch</option>
                    <option value='walkedDog'>Walked Dog</option>
                    <option value='work'>Work</option>
                    <option value='workout'>Workout</option>
                    <option value='yoga'>Yoga</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='activity3'>
                  <Form.Label>Activity 3</Form.Label>
                  <Form.Control as='select' name='activity3' value={this.state.activity3} onChange={this.handleChange}>
                    <option value='null'>Choose...</option>
                    <option value='bingedTheOffice'>Binged The Office</option>
                    <option value='cleaning'>Cleaning</option>
                    <option value='date'>Date</option>
                    <option value='family'>Family</option>
                    <option value='friends'>Friends</option>
                    <option value='healthyMeal'>Healthy Meal</option>
                    <option value='meditation'>Meditation</option>
                    <option value='movies'>Movies</option>
                    <option value='party'>Party</option>
                    <option value='reading'>Reading</option>
                    <option value='relax'>Relax</option>
                    <option value='school'>School</option>
                    <option value='shop'>Shop</option>
                    <option value='stretch'>Stretch</option>
                    <option value='walkedDog'>Walked Dog</option>
                    <option value='work'>Work</option>
                    <option value='workout'>Workout</option>
                    <option value='yoga'>Yoga</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group name='symptom1'>
                  <Form.Label>Symptom 1</Form.Label>
                  <Form.Control as='select' name='symptom1' value={this.state.symptom1} onChange={this.handleChange}>
                  <option value='null'>Choose...</option>
                  <option value='anger'>Anger</option>
                  <option value='anxiety'>Anxiety</option>
                  <option value='appetite'>Appetite</option>
                  <option value='concentration'>Concentration</option>
                  <option value='boredom'>Boredom</option>
                  <option value='depression'>Depression</option>
                  <option value='disgust'>Disgust</option>
                  <option value='emptiness'>Emptiness</option>
                  <option value='feelingDown'>Feeling Down</option>
                  <option value='feelingLost'>Feeling Lost</option>
                  <option value='headache'>Headache</option>
                  <option value='loneliness'>Loneliness</option>
                  <option value='nausea'>Nausea</option>
                  <option value='panicAttack'>Panic Attack(s)</option>
                  <option value='sadness'>Sadness</option>
                  <option value='suicidalThinking'>Suicidal Thinking</option>
                  {/* <option value=''></option> */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='symptom2'>
                  <Form.Label>Symptom 2</Form.Label>
                  <Form.Control as='select' name='symptom2' value={this.state.symptom2} onChange={this.handleChange}>
                  <option value='null'>Choose...</option>
                  <option value='anger'>Anger</option>
                  <option value='anxiety'>Anxiety</option>
                  <option value='appetite'>Appetite</option>
                  <option value='concentration'>Concentration</option>
                  <option value='boredom'>Boredom</option>
                  <option value='depression'>Depression</option>
                  <option value='disgust'>Disgust</option>
                  <option value='emptiness'>Emptiness</option>
                  <option value='feelingDown'>Feeling Down</option>
                  <option value='feelingLost'>Feeling Lost</option>
                  <option value='headache'>Headache</option>
                  <option value='loneliness'>Loneliness</option>
                  <option value='nausea'>Nausea</option>
                  <option value='panicAttack'>Panic Attack(s)</option>
                  <option value='sadness'>Sadness</option>
                  <option value='suicidalThinking'>Suicidal Thinking</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group name='symptom3'>
                  <Form.Label>Symptom 3</Form.Label>
                  <Form.Control as='select' name='symptom3' value={this.state.symptom3} onChange={this.handleChange}>
                  <option value='null'>Choose...</option>
                  <option value='anger'>Anger</option>
                  <option value='anxiety'>Anxiety</option>
                  <option value='appetite'>Appetite</option>
                  <option value='concentration'>Concentration</option>
                  <option value='boredom'>Boredom</option>
                  <option value='depression'>Depression</option>
                  <option value='disgust'>Disgust</option>
                  <option value='emptiness'>Emptiness</option>
                  <option value='feelingDown'>Feeling Down</option>
                  <option value='feelingLost'>Feeling Lost</option>
                  <option value='headache'>Headache</option>
                  <option value='loneliness'>Loneliness</option>
                  <option value='nausea'>Nausea</option>
                  <option value='panicAttack'>Panic Attack(s)</option>
                  <option value='sadness'>Sadness</option>
                  <option value='suicidalThinking'>Suicidal Thinking</option>
                  </Form.Control>
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
                <Button id='journalEntrySubmit' type='submit' onClick={this.handleSubmit}>Submit Edits</Button>
              </Col>
            </Row>
          </Col>
        </Form>
      </Modal>
    )
  }
}

export default ViewJournalEntry