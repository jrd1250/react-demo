import React, {Component} from 'react';
import SpinImage from "./SpinImage";
import logo from './logo.svg';
import './App.css';
import AuthNavbar from "./AuthNavbar";
import DeauthNavbar from "./DeauthNavbar";

class App extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        const navBar = isAuthenticated()
            ? <AuthNavbar auth={this.props.auth} />
            : <DeauthNavbar auth={this.props.auth} />
        return (
            <div>
                {navBar}
                <div className='App-header'>
                    <SpinImage image={logo} />
                </div>
            </div>
        )
    }
}

export default App;
