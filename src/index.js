import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router-dom'
import './index.css';
import App from './App.js';
import Dashboard from './Dashboard';
import history from './History';
import Auth from "./Auth";
import Callback from "./Callback";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

const routing = (
    <Router history={history} component={App}>
        <div>
            <Route exact path='/' render={(props) => <App auth={auth} />} />
            <Route path='/home' render={(props) => <App auth={auth} />} />
            <Route path='/dashboard' render={(props) => <Dashboard auth={auth} />} />
            <Route path='/callback' render={(props) => {
                handleAuthentication(props);
                return <Callback auth={auth} />
            }} />
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));
