import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='App-header'>
          <SpinImage image={logo} />
          <SignupForm />
        </h1>
      </div>
    );
  }
}

class SpinImage extends Component {
  render() {
    return (
      <img src={this.props.image} className='App-logo' alt='logo' />
    );
  }
}

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <Container>
        <Row className='justify-content-center'>
          <h1>Sign Up!</h1>
        </Row>
        <Row className='justify-content-start'>
          <Col>
            <Form onSubmit={e => this.handleSubmit(e)}>
              <Form.Group controlId='username' value={this.state.username} onChange={(event) => this.handleChange(event)}>
                <Form.Label>Username</Form.Label>
                <Form.Control name='username' type='text' placeholder='enter your username' />
              </Form.Group>
              <Form.Group controlId='email' value={this.state.email} onChange={(event) => this.handleChange(event)}>
                <Form.Label>Email Address</Form.Label>
                <Form.Control name='email' type='email' placeholder='enter your email address' />
              </Form.Group>
              <Form.Group controlId='password' value={this.state.password} onChange={(event) => this.handleChange(event)}>
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type='password' placeholder='enter your password' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Submitted!');
  }
}

export default App;
