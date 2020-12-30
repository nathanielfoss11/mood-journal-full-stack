import React from 'react';
import { Container, Form, Button } from 'react-bootstrap'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    //route for looking up password
    //check to see if password matches
      //if it does not then an error pops up
      //if it does then ReactDOM.render homepage

  }


  render() {
    return ( 
        <div>
          <Container>
            <Form>
              <Form.Group name='username'>
                <Form.Label>Username*</Form.Label>
                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group name='password'>
                <Form.Label>Password*</Form.Label>
                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </div>
    );
  }
}

export default Login;