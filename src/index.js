import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} /> 
            <Route exact path="/Home" component={App} />
            <Route path="/About" component={About} />
            <Route path="/Schedule" component={ () => {
                window.location.href = 'https://docs.google.com/spreadsheets/d/18Z1sBLUg5_S1MB_etLsKZ44Q2UEI__pBmlkH_5Mu9D4/edit?usp=sharing';
            }} />
            <Route path="/Builds" component={ () => {
                window.location.href = 'https://www.snowcrows.com/';
            }} />
            {/* <Route path="/GitGud" component={ () => {
                window.location.href = 'https://www.youtube.com/watch?v=j_ekugPKqFw';
            }} />
            // <Redirect to="/" /> */}
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
