import React, {Component} from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import history from "./History";

class DeauthNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="home">React Demo</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Button variant='primary' type='submit' onClick={() => this.login()}>
                        Login
                    </Button>
                </Nav>
            </Navbar>
        );
    }

    login() {
        this.props.auth.login();
        history.push('/dashboard');
    }
}

export default DeauthNavbar;
