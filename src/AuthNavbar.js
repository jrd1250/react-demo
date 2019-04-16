import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import history from './History';

class AuthNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="home">React Demo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="dashboard">Dashboard</Nav.Link>
                    <Button variant='primary' type='submit' onClick={() => this.logout()}>
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        );
    }

    logout() {
        this.props.auth.logout();
        history.push('/home');
    }
}

export default AuthNavbar;

