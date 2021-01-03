import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap'
import Login from './components/Login.jsx'
import JournalEntry from './components/JournalEntry.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,

    }
  }


  componentDidMount() {
    if(this.state.isLoggedIn === false) {
      ReactDOM.render(<Login />, document.getElementById('login'))
    }
  }
  
  
  render() {
    return ( 
        <div>
          <Container>
            {/* <h1>Track Your Mood</h1> */}
            <br />
            <br />
            <div id='homepage'></div>
            <div id='login'></div>
          </Container>
        </div>
    );
  }
}

export default App;