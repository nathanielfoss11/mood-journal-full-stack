import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Form, Button, Col } from 'react-bootstrap';
import Homepage from './Homepage.jsx';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: 'nate',
      password: 'nate',
      confirmPassword: '',
      signup: false,
      name: '',
      email: '',
      weight: 0,
      heightFeet: 0,
      heightInches: 0,
      medication: '',
      passwordMatch: true,
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
    let obj = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      weight: this.state.weight,
      heightFeet: this.state.heightFeet,
      heightInches: this.state.heightInches,
      medication: this.state.medication,
    }
    if(this.state.signup === false) {
      axios.get(`/users/${username}`)
      .then((result) => {
        if(result.data[0]['p'] === obj.password) {
          result.data[0]['p'] = null;
          ReactDOM.unmountComponentAtNode(document.getElementById('login'))
          ReactDOM.render(<Homepage user={result.data[0]} />, document.getElementById('homepage'));
        } else {
          this.setState({passwordMatch: false});
        }
      })
    } else {
      axios.post('/users', obj)
      .then((result) => {
        ReactDOM.unmountComponentAtNode(document.getElementById('login'))
        ReactDOM.render(<Homepage user={obj} />, document.getElementById('homepage'));
      })
      .catch((err) => console.log(err));
    }
  }


  render() {
    let name, weight, height, medication, email, signup, login, action, confirmPassword, wrongPassword;
    if(this.state.signup === false) {
      signup = <p onClick={()=>{this.setState({signup: true})}}><b>Sign Up Here</b></p>
      action = 'Log In'
    }
    if(this.state.signup === true) {
      login = <p onClick={()=>{this.setState({signup: false})}}><b>Log In Here</b></p>
      action = 'Sign Up'
      name = 
        <Col>
          <Form.Row>
            <Col>
              <Form.Group name='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group name='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
              </Form.Group>
            </Col>
          </Form.Row>
        </Col>

      height = 
      <Col>
      <Form.Row>
      <Col>
      <Form.Group name='weight'>
        <Form.Label>Weight</Form.Label>
        <Form.Control type='number' name='weight' value={this.state.weight} onChange={this.handleChange}/>
      </Form.Group>
      </Col>
        <Col>
          <Form.Group name='height'>
          <Form.Label> Height</Form.Label>
          <Form.Control type='number' name='heightFeet' value={this.state.heightFeet} onChange={this.handleChange} /> Feet
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
          <Form.Label> .</Form.Label>
          <Form.Control type='number' name='heightInches' value={this.state.heightInches} onChange={this.handleChange} /> Inches
          </Form.Group>
        </Col>
      </Form.Row>
      </Col>

      medication = 
      <Col>
      <Form.Group name='medication'>
        <Form.Label>Do you take any medication?</Form.Label>
        <Form.Control as='select' name='medication' onChange={this.handleChange}>
          <option value='0'>Choose...</option>
          <option value='yes'>Yes</option>
          <option value='sometimes'>Sometimes</option>
          <option value='no'>No</option>
        </Form.Control>
      </Form.Group>
      </Col>

      confirmPassword = 
      <Form.Group name='password'>
        <Form.Label>Confirm Password*</Form.Label>
        <Form.Control type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleChange}/>
      </Form.Group>
    }
    if(this.state.passwordMatch === false) {
      wrongPassword = <p>You entered the wrong password!</p>
    }

    return ( 
        <div>
          <Container>
            <h2 id='loginWelcome'>Welcome to Your Mood Tracker</h2>
            <br />
            <h3 id='actionTitle'>{action}</h3>
            <br />
            <Form>
              <Col>
              <Form.Group name='username'>
                <Form.Label>Username*</Form.Label>
                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group name='password'>
                <Form.Label>Password*</Form.Label>
                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                {wrongPassword}
              </Form.Group>
              </Col>
              <Col>
              {confirmPassword}
              </Col>
              {name}
              {email}
              {weight}
              {height}
              {medication}
              <Col>
                {signup}
                {login}
              </Col>
              <Col>
              <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                {action}
              </Button>
              </Col>
              <br />
              <br />
            </Form>
          </Container>
        </div>
    );
  }
}

export default Login;