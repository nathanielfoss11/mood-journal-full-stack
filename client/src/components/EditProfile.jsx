import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Form, Button, Col, Row, Modal} from 'react-bootstrap';
import Homepage from './Homepage.jsx';

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      username: props.user.username,
      password: props.user.password,
      confirmPassword: '',
      name: props.user.name,
      email: props.user.email,
      weight: props.user.weight,
      heightFeet: props.user.height_feet,
      heightInches: props.user.height_inches,
      medication: props.user.medication,
      passwordMatch: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(event) {
    event.preventDefault();
    this.setState({show: false})
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
        console.log(result)
        if(result.data[0]['p'] === obj.password) {
          ReactDOM.unmountComponentAtNode(document.getElementById('login'))
          ReactDOM.render(<Homepage user={result.data[0]} />, document.getElementById('homepage'))
        } else {
          this.setState({passwordMatch: false})
        }
      })
    } else {
      console.log(obj)
      axios.post('/users', obj)
      .then((result) => {
        ReactDOM.unmountComponentAtNode(document.getElementById('login'))
        ReactDOM.render(<Homepage user={obj} />, document.getElementById('homepage'))
      })
      .catch((err) => console.log(err))
    }
  }
  render() {

    return(
      <Modal show={this.state.show} onHide={this.handleClose} className="modal-90w">
        <Modal.Header closeButton onClick={this.handleClose}>Update Your Profile</Modal.Header>
        <Form id='journalEntry'>
          <Row>
            <Col>
              <Form.Group name='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group name='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' name='name' value={this.state.username} onChange={this.handleChange}/>
              </Form.Group>
              </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group name='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>

          </Row>
          <Row>
            <Col>
              <Row>
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
              </Row>
              <Row>
                <Col>
                  <Form.Group name='medication'>
                    <Form.Label>Do you take any medication?</Form.Label>
                    <Form.Control as='select' name='medication' onChange={this.handleChange} value={this.state.medication}>
                      <option value='0'>Choose...</option>
                      <option value='yes'>Yes</option>
                      <option value='sometimes'>Sometimes</option>
                      <option value='no'>No</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type='submit'>Update Profile</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal>
    )
  }
}

export default EditProfile;