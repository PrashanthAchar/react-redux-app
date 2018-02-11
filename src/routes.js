import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import App from './containers/App.jsx';
import About from './containers/About.jsx'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    )
}

