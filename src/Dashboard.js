import React, {Component} from 'react';
import AuthNavbar from "./AuthNavbar";
import SpinImage from "./SpinImage";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import logo from './logo.svg';
import './App.css';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: 'Strategy',
            numPlayers: 0,
            playtime: 0,
            games: [],
        }
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        return isAuthenticated() ? (
            <div>
                <AuthNavbar auth={this.props.auth} />
                <div className='App-header'>
                    <SpinImage image={logo} />
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group onChange={(event) => this.handleChange(event)}>
                            <Form.Label>Game Title</Form.Label>
                            <Form.Control value={this.state.name} name='name' type='text' />
                        </Form.Group>
                        <Form.Group onChange={(event) => this.handleChange(event)}>
                            <Form.Label>Game Genre</Form.Label>
                            <Form.Control value={this.state.genre} name='genre' as='select'>
                                <option>Strategy</option>
                                <option>Take-that</option>
                                <option>Social Deduction</option>
                                <option>Role-playing</option>
                                <option>Worker Placement</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group onChange={(event) => this.handleChange(event)}>
                            <Form.Label>Number of Players</Form.Label>
                            <Form.Control value={this.state.numPlayers} name='numPlayers' type='number' />
                        </Form.Group>
                        <Form.Group onChange={(event) => this.handleChange(event)}>
                            <Form.Label>Playing Time</Form.Label>
                            <Form.Control value={this.state.playtime} name='playtime' type='number' />
                        </Form.Group>
                        <Row className='justify-content-center'>
                            <Button variant='primary' type='submit' >
                                Add Game
                            </Button>
                        </Row>
                    </Form>
                    <Table striped bordered hover variant='dark'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th># of Players</th>
                                <th>Playtime</th>
                            </tr>
                        </thead>
                        {this.state.games.map(game => (
                            <tbody key={game.name}>
                                <tr>
                                    <td>{game.name}</td>
                                    <td>{game.genre.toString()}</td>
                                    <td>{game.numPlayers}</td>
                                    <td>{game.playtime}</td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        ) : (
            <div>
                Not authenticated!
            </div>
        )
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
        const games = this.state.games.slice();
        games.push(
            new BoardGame(
                this.state.name,
                this.state.genre,
                this.state.numPlayers,
                this.state.playtime
            )
        );
        this.setState({
            name: '',
            genre: 'Strategy',
            numPlayers: 0,
            playtime: 0,
            games: games,
        })
    }
}

class BoardGame {
    constructor(name, genre, numPlayers, playtime) {
        this.name = name;
        this.genre = genre;
        this.numPlayers = numPlayers;
        this.playtime = playtime;
    }
}

export default Dashboard;
