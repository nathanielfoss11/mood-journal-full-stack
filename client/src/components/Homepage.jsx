import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap'
import axios from 'axios';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.user.username,
      quoteObj: {},
      quote: '',
      author: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/quotes')
    .then((result) => this.setState({quoteObj: result}))
    .catch((err) => console.log(err))
  }


  render() {
    return(
      <Container>
        <Col>
          <Row>
            <h2>Hello, {this.state.username}</h2>
          </Row>
          <Row>
            <h3>"{this.state.quoteObj['quote']}" -{this.state.quoteObj['author']}</h3>
          </Row>
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