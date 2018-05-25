import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import NotFound from './containers/NotFound'

import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={App}
                />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
