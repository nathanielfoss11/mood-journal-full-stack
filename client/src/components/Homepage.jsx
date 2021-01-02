import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: props.user,
      username: props.user.username,
      quoteObj: {},
      quote: '',
      author: '',
    }
  }

  componentDidMount() {
    let quoteId = Math.floor(Math.random() * 1664)
    axios.get(`/quotes/${quoteId}`)
    // .then((result) => console.log(result.data[0]))
    .then((result) => this.setState({quoteObj: result.data[0]}))
    .catch((err) => console.log(err))
  }


  render() {
    return(
      <Container>
        <Col>
          <Row>
            <h2>Hello, {this.state.username}</h2>
          </Row>
          <br />
          <Row>
            <h3 id='quote'>"{this.state.quoteObj['quote']}" -{this.state.quoteObj['author']}</h3>
          </Row>
          <br />
          <br />
          <Row>
            <Col id='reminders'>
              <h4>Today's Reminders</h4>
            </Col>
            <Col id='moodChart'>
              <h4>Recent Moods</h4>
            
            </Col>
          </Row>
          <Row>
            <Col>
            <br />
            <br />
            <h4>Journal Entries</h4>
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
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    )
  }
}

export default Homepage