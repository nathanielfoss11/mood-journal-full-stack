import React from 'react';
import { Container } from 'react-bootstrap'
import Login from './components/Login.jsx'

const App = () => {
    return ( 
        <div>
          <Container>
            <h1>Track Your Mood</h1>
            <br />
            <br />
            <Login />
          </Container>
        </div>
    );
}

export default App;