import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
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
    const username = this.state.username;
    const password = this.state.password;
    event.preventDefault();
    //route for looking up password
    //check to see if password matches
      //if it does not then an error pops up
      //if it does then ReactDOM.render homepage

  }


  render() {
    let name, weight, height, medication, email, signup, login, action, confirmPassword;
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
      // email = 
      //   <Col>
      //   <Form.Group name='email'>
      //     <Form.Label>Email</Form.Label>
      //     <Form.Control type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
      //   </Form.Group>
      //   </Col>
      // weight = 
      // <Col>
      // <Form.Group name='weight'>
      //   <Form.Label>Weight</Form.Label>
      //   <Form.Control type='number' name='weight' value={this.state.weight} onChange={this.handleChange}/>
      // </Form.Group>
      // </Col>

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
        <Form.Control type='password' name='password' value={this.state.confirmPassword} onChange={this.handleChange}/>
      </Form.Group>
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
              <Button variant="primary" type="submit">
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