import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Form, Button, Col, Row, Modal} from 'react-bootstrap'
import axios from 'axios';
import JournalEntry from './JournalEntry.jsx'
import JournalEntryContainer from './JournalEntryContainer.jsx'
import EditProfile from './EditProfile.jsx'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      userId: props.user.user_id,
      username: props.user.username,
      quoteObj: {},
      quote: '',
      author: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this)
  }

  componentDidMount() {
    axios.get(`/users/${this.state.userId}/journal`)
    .then((result) => ReactDOM.render(<JournalEntryContainer entries={result.data} />, document.getElementById('journal')))
    .catch((err) => console.log(err))

    let quoteId = Math.floor(Math.random() * 1664)
    axios.get(`/quotes/${quoteId}`)
    .then((result) => this.setState({quoteObj: result.data[0]}))
    .catch((err) => console.log(err))
  }

  handleClick(event) {
    event.preventDefault();
    let userId = this.state.userId
    ReactDOM.render(<Container><Col><JournalEntry user={this.state.user} show={true}/></Col></Container>, document.getElementById('modal'))
  }

  handleUpdateProfile(event) {
    event.preventDefault();
    ReactDOM.render(<EditProfile user={this.state.user}/>, document.getElementById('modal'))
  }

  render() {
    return(
      <Container>
        <Col>
          <Row>
            <Col>
              <h2>Hello, {this.state.user.name}</h2>
            </Col>
            <Col>
            </Col>
          </Row>
          {/* <Row>
            <h3 id='quote'>"{this.state.quoteObj['quote']}" -{this.state.quoteObj['author']}</h3>
          </Row> */}
          <br />
          <br />
          <Row>
            <Col id='reminders'>
              <h4>Actions</h4>
              <Row>
                <Col>
                  <Button type='submit' onClick={this.handleClick}>Add Journal Entry</Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={this.handleUpdateProfile}>Update Profile</Button>             
                </Col>
              </Row>
            </Col>
            <Col id='moodChart'>
              <h4>Today's Motivation</h4>
              <h3 id='quote'>"{this.state.quoteObj['quote']}" -{this.state.quoteObj['author']}</h3>
            </Col>
          </Row>
          <Row id='journalColumn'>
            <Col id='journalColumn'>
            <br />
            <br />
            <Row id='journalTitle'>
              <Col>
                <h4>Journal Entries</h4>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row id='journalColumnNames'>
            <Col xl={2}>
              <p>Date</p>
            </Col>
            <Col xl={1}>
              <p>Mood</p>
            </Col>
            <Col xl={1}>
              <p>Sleep</p>
            </Col>
            <Col>
              <p>Notes</p>
            </Col>
            <Col xl={2}>
            
            </Col>
          </Row>
          <div id='journal'>
          </div>
        </Col>
        <div id='modal'></div>
      </Container>
    )
  }
}

export default Homepage