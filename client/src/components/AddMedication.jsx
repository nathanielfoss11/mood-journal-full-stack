import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap'

class AddMedication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: props.user.id,
      username: props.user.username,
      dosage: 0,
      medicationName: '',
      refillDay: 0,
      reminder: false,
      daysBeforeRefill: 0,
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

export default AddMedication